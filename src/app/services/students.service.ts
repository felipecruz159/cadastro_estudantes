import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../components/students/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  saveStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(this.url, student);
  }
}
