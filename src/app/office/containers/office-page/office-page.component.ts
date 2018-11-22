import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.scss']
})
export class OfficePageComponent implements OnInit {

  @ViewChild('drawer') drawer: any;

  constructor() { }

  ngOnInit() {
  }

  toogleMenu() {
    this.drawer.toggle();
  }

}
