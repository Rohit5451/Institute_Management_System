import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Objective/Common.objects';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getAllStudents(arg0: (data: any[]) => void) {
    throw new Error('Method not implemented.');
  }

  baseCoursesUrl : string = "http://localhost:3000/student";
  baseStudentUrl: string =" http://localhost:3000/student";

  constructor(private httpClient : HttpClient) { }

  public getAllCourses(callback : any){
    let ob = this.httpClient.get(this.baseCoursesUrl);
    ob.subscribe((data)=>{
      callback (data);
    })
  } 




  
  public saveStudent (student : Student) : void{
    let ob = this.httpClient.post(this.baseStudentUrl,student);
    ob.subscribe(data=>{
      
      console.log(data);
    });

  }


}
