import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  baseUrl: string = environment.apiUrl.concat('/students');

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  getStudentById (id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student, { headers: this.headers });
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${student.id}`, student, { headers: this.headers });
  }
  
  deleteStudentById(id: number): Observable<Student> {
    return this.http.delete<Student>(`${this.baseUrl}/${id}`);
  }
}
