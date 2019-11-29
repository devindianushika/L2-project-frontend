import { Component, OnInit, Input } from '@angular/core';
import { AdminNewsDTO } from 'src/app/dto/AdminNewsDTO';
import { AppConstants } from 'src/app/modules/AppConstants';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.css']
})
export class NewsPostComponent implements OnInit {
 
  @Input() newsDTO : AdminNewsDTO;

  constructor() { }


  name : string;
  profile : string;
  date : string;
  title : string;
  description : string;
  imgUrl : string;

  backendUrl : string;
  
  ngOnInit() {

    this.backendUrl = AppConstants.BACKEND_URL;

    this.name = this.newsDTO.adminDTO.fullName;
    this.profile = this.newsDTO.adminDTO.profile_uri;
    this.date = this.newsDTO.date;
    this.title = this.newsDTO.title;
    this.description = this.newsDTO.description;
    this.imgUrl = this.newsDTO.profile_uri;

    console.log("================ Amin News");

  }

}
