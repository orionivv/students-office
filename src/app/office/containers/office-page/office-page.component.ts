import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CoreStoreService} from '../../../core/store/core-store.service';
import {AuthStoreService} from '../../../auth/store/auth-store.service';

@Component({
  selector: 'office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.scss']
})
export class OfficePageComponent implements OnInit {

  @ViewChild('drawer') drawer: any;

  constructor(
    private authStoreService: AuthStoreService,
  ) { }

  ngOnInit() {
    // this.authStoreService.dispatchGetUserInfo();
  }

  toogleMenu() {
    this.drawer.toggle();
  }

  logout() {
    this.authStoreService.dispatchLogout();
  }

}
