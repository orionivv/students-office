import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isOpenMenu: boolean;
  @Input() name: string;
  @Input() showActionBtn: boolean;

  @Output() menuToogle = new EventEmitter();
  @Output() actionBtnClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleMenuToogle() {
    this.menuToogle.emit();
  }

  handleActionBtnClick() {
    this.actionBtnClick.emit();
  }
}
