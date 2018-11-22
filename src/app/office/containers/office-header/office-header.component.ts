import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'office-header',
  templateUrl: './office-header.component.html',
  styles: ['']
})
export class OfficeHeaderComponent implements OnInit {

  @Input() isOpen: boolean;
  @Output() menuToogleEmitter = new EventEmitter();

  showActionBtn = true;

  constructor() { }

  ngOnInit() {
  }

  menuToogle() {
    this.menuToogleEmitter.emit();
  }

  actionBtn() {
    console.log('click action')
  }

}
