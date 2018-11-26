import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss']
})
export class SideDrawerComponent implements OnInit {

  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleLogout() {
    this.logout.emit();
  }
}
