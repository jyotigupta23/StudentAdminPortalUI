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

  getStudent():Observable<Student[]>{ //students[] array to access the list of the students
   return this.httpClient.get<Student[]>(this.baseApiUrl+'/Students');
   }
}
