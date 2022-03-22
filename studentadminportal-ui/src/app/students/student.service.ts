import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/models/api.models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl = 'https://localhost:44304';


  constructor( private httpClient: HttpClient) {}

  getStudents():Observable<Student[]>{ //students[] array to access the list of the students
   return this.httpClient.get<Student[]>(this.baseApiUrl+'/students');//here the Student[]has to come from the api model not from the ui model
   }

  getStudent(studentId: string): Observable<Student>{
    return this.httpClient.get<Student>(this.baseApiUrl+'/students/'+studentId); //id from the method parameter
  }

}
