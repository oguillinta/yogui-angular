import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  title: string;

  student: Student = {
    name: "",
    lastName: "",
    age: 0,
    address: "",
    email: "",
    phoneNumber: ""

  };

  constructor(private service: StudentService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if (id) {
        this.service.getStudentById(id).subscribe(student => this.student = student);
      }
    })
  }

  AddStudent(): void {
    this.service.addStudent(this.student).subscribe(student => {
      console.log(student);
      this.router.navigate(['/']);
    });
  }

  EditStudent(): void {
    this.service.updateStudent(this.student).subscribe(student => {
      console.log(student);
      this.router.navigate(['/']);
    });
  }

}
