import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  startDate = new Date(2024,0, 28);

  @ViewChild('firstCard')
  card: CourseCardComponent;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  ngAfterViewInit() {
    this.cards.changes.subscribe(cards => console.log(cards));
  }

  onCourseSelected(course: Course){
    console.log('from app', this.card);
    
  }

  trackCourse(index: number, course: Course){
    return course.id;
  }

  onEdit(){
    this.courses.push( {
      id: 5,
      description: 'Added by Edit',
      longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
      category: 'ADVANCED',
      lessonsCount: 11
  })
  }
}
