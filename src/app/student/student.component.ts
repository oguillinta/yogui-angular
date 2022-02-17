import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students: Student[];

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.service.getStudents().subscribe(response => this.students = response);
  }

  deleteStudentById(id: number) {
    this.service.deleteStudentById(id).subscribe(() => {
      this.students = this.students.filter(student => student.id !== id);
    });
  }





}
