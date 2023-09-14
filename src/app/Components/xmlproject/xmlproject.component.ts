import { Component } from '@angular/core';
import { Employee } from '../Objective/Common.objects';

@Component({
  selector: 'app-xmlproject',
  templateUrl: './xmlproject.component.html',
  styleUrls: ['./xmlproject.component.css']
})
export class XmlprojectComponent {

  employee: Employee = { empno: 0, name: '', address: '', phone: '', salary: 0 };

  employees: Employee[] = [];

  public onSubmit() {
    let xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:3000/Employee");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.responseType = "json";
    xhr.send(JSON.stringify(this.employee));
  }


  public onFetch() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:3000/Employee");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.responseType = "json";
    xhr.onload = () => {
      this.employees = xhr.response;
    };
    xhr.send();

  }
}