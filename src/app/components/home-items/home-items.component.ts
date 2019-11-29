import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.css']
})
export class HomeItemsComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {this.matIconRegistry.addSvgIcon(
      "audelia_logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/logos/Logo.svg")
    ).addSvgIcon(
      "audelia_logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/logos/Logo.svg")
    ) }

  ngOnInit() {
  }

}
