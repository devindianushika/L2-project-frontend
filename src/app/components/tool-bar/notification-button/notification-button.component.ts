import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.css']
})
export class NotificationButtonComponent {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer ){this.matIconRegistry.addSvgIcon(
      "notification",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/icons/notifications_active-24px.svg")
    );}

}
