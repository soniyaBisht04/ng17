import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({
    required: true
  })
  course : Course;

  @Input({required: true})
  index: number;

  @Input()
  noImageTemplate: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  selectCourse(){
    console.log('yes');
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    // can also do this 
    // if(this.course.category == 'BEGINNER') {
    //   return ['beginner']
    // }
    return {
      'beginner': this.course.category == 'BEGINNER',
      'course-card': true
    }
  }

  cardTitleStyles(){
    return {
      'text-decoration': 'underline'
    }
  }
}
