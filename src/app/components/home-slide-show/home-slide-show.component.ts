import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-slide-show',
  templateUrl: './home-slide-show.component.html',
  styleUrls: ['./home-slide-show.component.css']
})
export class HomeSlideShowComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {  
    config.interval = 8000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;

 }


  ngOnInit() {
  }

}
