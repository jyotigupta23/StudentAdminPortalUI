import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/models/ui.models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentId: string|null|undefined;
  student:Student ={
    id:'',
    firstName:'',
    lastName:'',
    dateOfBirth:'',
    email:'',
    mobile:0,
    genderId:'',
    profileImageUrl:'',
    gender:{
      id:'',
      description:'',

    },
    address:{
      id:'',
      physicalAddress:'',
      postalAddress:'',
    }

  }


  constructor(private readonly studentService: StudentService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( //here we subscribe the parameter fromf paramMap
      (params)=>{
       this.studentId = params.get('id');  //using the params get method, this id should be same as the one given in the route array path in app.module.ts

      if(this.studentId){
        this.studentService.getStudent(this.studentId)//this returns the observable
        .subscribe( //subscribing to console out the value comming from the api
          (successResponse)=>{
            //removing the console
           // console.log(successResponse);
           this.student=successResponse;
          }
        );
      }
     }
    );
  }

}
