import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss']
})
export class SubjectCardComponent implements OnInit {

  @Input() title: string;
  @Input() vacantPlaces?: string;
  @Input() allPlaces?: string;
  @Input() isRequered?: boolean;

  constructor() { }

  ngOnInit() {
  }

}
