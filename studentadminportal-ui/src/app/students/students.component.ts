import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/models/ui.models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 students:Student[] =[];

 //using the angular material from the web
 displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender','edit'];

 //dataSource: it's the student list
dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

//for hooking the paginator for it's proper working
@ViewChild(MatPaginator) matPaginator !: MatPaginator;

//for hooking the sorting for it's proper working
@ViewChild(MatSort) matSort !: MatSort;

filterString='';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    //fetch
    this.studentService.getStudents().subscribe(
      (successResponse)=>{
       /* console.log(successResponse[0].firstName);
        console.log(successResponse[0].lastName);*/
      this.students = successResponse;

      //filling the students with the list of dataSource
      this.dataSource=new MatTableDataSource<Student>(this.students);

      //Adding Paginator with the dataSource
      if(this.matPaginator){
        this.dataSource.paginator = this.matPaginator;
      }

      if(this.matSort){
        this.dataSource.sort = this.matSort;
      }

      },
      (errorResponse)=>{console.log(errorResponse);}
    );
  }
  filterStudents(){
    this.dataSource.filter= this.filterString.trim().toLowerCase();
  }
}
