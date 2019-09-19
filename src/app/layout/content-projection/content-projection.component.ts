import { Component, OnInit, ContentChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit, AfterViewInit {

  @ContentChildren('social_links') mySocialLinks: QueryList<ElementRef>;

  constructor() { }
  ngOnInit() { }

  ngAfterViewInit() {
    let social_links = this.mySocialLinks.toArray();
    for (let i = 0; i < social_links.length; i++) {
      social_links[i].nativeElement.target = '_blank';
    }
  }

}
