import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {AcademicSubjectsService} from '../../services/academic-subjects.service';
import {CoreStoreService} from '../../../core/store/core-store.service';
import {SubjectStoreService} from '../../store/subject-store.service';

@Component({
  selector: 'academic-subjects',
  templateUrl: './academic-subjects.component.html',
  styleUrls: ['./academic-subjects.component.scss']
})
export class AcademicSubjectsComponent implements OnInit {
  optional = [];
  arr2 = [];
  require = [];

  constructor(
    private academicSubjectsService: AcademicSubjectsService,
    private coreStoreService: CoreStoreService,
    private subjectStoreService: SubjectStoreService,
  ) { }

  ngOnInit() {
    this.subjectStoreService.dispatchGetSubjectsForUser();
    this.coreStoreService.getActionsHeaderClick().subscribe(this.saveSubjects);
    this.subjectStoreService.selectOptionalSubject().subscribe(optional => this.optional = optional);
    this.subjectStoreService.selectRequiredSubject().subscribe(require => this.require = require);
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

  saveSubjects() {
    console.log('==save')
  }

}
