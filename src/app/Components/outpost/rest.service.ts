import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService { 

  baseUri: string="http://localhost:3000";

 constructor(private httpClient:HttpClient){}

    public getAllStudents(callback : any){
      this.httpClient.get(this.baseUri+"/student")
             .subscribe((data)=>{
                 callback(data);
             })
    }        

  public getStudent(id:number,callback:any){
     this.httpClient.get(this.baseUri+"/student/"+id)
                     .subscribe((data:any)=>{
                       callback(data);
                     })
  } 

  public addStudent(student : any,callback : any){
     this.httpClient.post(this.baseUri+"/student",student)
                  .subscribe((data:any)=>{
                     this.httpClient.get(this.baseUri+"/student")
                                    .subscribe((data : any)=>{
                                      callback(data);
                                    })
                  })
  }

  public deleteStudent(id : number,callback : any){
    this.httpClient.delete(this.baseUri+"/student/"+id)
                 .subscribe((data:any)=>{
                    this.httpClient.get(this.baseUri+"/student")
                                   .subscribe((data : any)=>{
                                     callback(data);
                                   })
                 })
 }

 public updateStudent(id : number,student : any ,callback : any){
  this.httpClient.put(this.baseUri+"/student/"+id,student)
               .subscribe((data:any)=>{
                  this.httpClient.get(this.baseUri+"/student")
                                 .subscribe((data : any)=>{
                                   callback(data);
                                 })
               })
} 

   
 
}
  

