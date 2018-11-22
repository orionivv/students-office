import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'academic-subjects',
  templateUrl: './academic-subjects.component.html',
  styleUrls: ['./academic-subjects.component.scss']
})
export class AcademicSubjectsComponent implements OnInit {
  arr1 = [
    {
      text: 'Инженерная графика',
      place: 10,
      vacantPlaces: 1
    },
    {
      text: 'Средства разработки веб-сайтов',
      place: 10,
      vacantPlaces: 1
    },
    {
      text: 'Язык разметки XML',
      place: 10,
      vacantPlaces: 10
    },
    {
      text: 'Язык программирования JAVA',
      place: 10,
      vacantPlaces: 4
    }
  ];
  arr2 = [];
  arr3 = [
    {
      text: 'Инженерная графика',
    },
    {
      text: 'Средства разработки веб-сайтов',
    },
    {
      text: 'Язык разметки XML',
    },
    {
      text: 'Язык программирования JAVA',
    }
  ];

  constructor() { }

  ngOnInit() {
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  noReturnPredicate(item: CdkDrag<any>) {
    // console.log(this.element);
    return false
  }

}
