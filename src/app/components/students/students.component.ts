import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private StudentsService: StudentsService, private formBuilder: FormBuilder) {
    this.formGroupStudent = formBuilder.group({
      id: [''],
      nome: [''],
      idade: [''],
      curso: [''],
      semestre: [''],
      periodo: ['']
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  students: Student[] = [];
  formGroupStudent: FormGroup;

  loadStudents(){
    this.StudentsService.getStudent().subscribe({
      next: data => this.students = data
    })
  }

  save(){
    console.log(this.students);
    this.StudentsService.saveStudent(this.formGroupStudent.value).subscribe({
      next: data => {
        this.students.push(data);
        this.formGroupStudent.reset();
      }
    })
  }
}
