import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-outpost',
  templateUrl: './outpost.component.html',
  styleUrls: ['./outpost.component.css']
})
export class OutpostComponent {

  students : any[] = [];
  student : any ={}
  baseUri:string ="http://localhost:3000";

  viewComponent : string ='displayall';
  httpClient: any;
 

  constructor(private httpService : RestService){
    httpService.getAllStudents((data : any[])=>{
                this.students=data;  
     });
        
  }

  public onViewClick(id : number){
    this.httpService.getStudent(id,(data : any)=>{
      this.student=data;
    })
    this.viewComponent= 'display'
  }
  public onAddStudent(): void{
    this.student= {};
    this.viewComponent= 'add'

  } 
  public addStudentProcess(): void{
  
    this.httpService.addStudent(this.student,(data : any[])=>{
      this.students = data;
    });

     this.viewComponent= "displayall"
  }

  public onDeleteClick(id:number){

    this.httpService.deleteStudent(id,(data : any[])=>{
      this.students
      
       = data;
      
    });
    this.viewComponent = "displayall"
  }


  public onUpdateClick( id : number): void{
    this.httpService.getStudent(id,(data:any)=>{
       this.student = data;
    })
    this.viewComponent = "update"

  }


  public updateStudentProcess(id : number) : void{
    this.httpService.updateStudent(id,this.student,(data:any)=>{
      this.students = data;
    })
    this.viewComponent = "displayall"
  }

}

