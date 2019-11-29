import { Component, OnInit } from '@angular/core';
import { MatIconRegistry , MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ArticalUploadFileComponent } from '../artical-upload-file/artical-upload-file.component';
import { ArticlesDTO } from 'src/app/dto/ArticlesDTO';
import { MatDialog } from '@angular/material';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {


  userType : string;

  articlesDTO : ArticlesDTO = new ArticlesDTO();

  pendingArticleList : ArticlesDTO[] = [];
  approvedArticleList : ArticlesDTO[] = [];

  constructor(private matIconRegistry: MatIconRegistry,
    private dialog : MatDialog,
    private domSanitizer: DomSanitizer,private authService : AuthenticationService,
    private articleService : ArticlesService) {this.matIconRegistry.addSvgIcon(
      "add",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/add_photo_alternate-24px.svg")
    );
    this.userType = this.authService.currentUserValue.userType.toString();

    console.log("=================== " + this.userType);

    if(this.userType === "TEACHER"){
      this.articleService.getAllPendingArticles().subscribe(x=> {
          this.pendingArticleList = x;
      });
    }

    this.articleService.getAllConfirmedArticles().subscribe(x=> {
        this.approvedArticleList = x;
    });

  }

  onRejectP(articlesDTO : ArticlesDTO){
    this.pendingArticleList = this.pendingArticleList.filter(t => t.id !== articlesDTO.id);
  }

  onApproveP(articlesDTO : ArticlesDTO){
    this.pendingArticleList = this.pendingArticleList.filter(t => t.id !== articlesDTO.id);
    this.approvedArticleList.push(articlesDTO);
  }

  ngOnInit() {
  }

  onClick(){
    const dialogRef = this.dialog.open(ArticalUploadFileComponent, {
      width: '300px',
      disableClose : true,
      data: { articlesDTO : this.articlesDTO 
    }
    });
  }

}
