import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoreStoreService} from '../../../core/store/core-store.service';
import {AuthStoreService} from '../../../auth/store/auth-store.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'office-header',
  templateUrl: './office-header.component.html',
  styles: ['']
})
export class OfficeHeaderComponent implements OnInit {

  @Input() isOpen: boolean;
  @Output() menuToogleEmitter = new EventEmitter();

  showActionBtn = true;
  name: string;

  constructor(
    private coreStoreService: CoreStoreService,
    private authStoreService: AuthStoreService,
  ) { }

  ngOnInit() {
    this.authStoreService.dispatchCheckUserInfo();
    this.authStoreService.selectUserName().subscribe(name => this.name = name);
  }

  menuToogle() {
    this.menuToogleEmitter.emit();
  }

  actionBtn() {
    this.coreStoreService.dispatchHeaderActionBtnClick();
  }

}
