import { Component, OnInit } from '@angular/core';
import {CoreStoreService} from '../../store/core-store.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  status: boolean;

  constructor(
    private storeService: CoreStoreService,
  ) { }

  ngOnInit() {
    this.storeService.getTestStatus().subscribe( status => this.status = status);
  }

  handleStatusOn() {
    this.storeService.dispatchTestOn();
  }
  handleStatusOff() {
    this.storeService.dispatchTestOff();
  }
  handleConsoleLog() {
    console.log(this.status);
  }

  setItem() {
    localStorage.setItem('testKey', 'testKey-value');
  }

  getItem() {
    console.log(localStorage.getItem('testKey'));
  }

}
