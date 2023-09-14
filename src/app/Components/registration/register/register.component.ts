import { Component } from '@angular/core';
import { Student } from '../../Objective/Common.objects';
import { FormControl, FormGroup, NgForm, PatternValidator, Validators } from '@angular/forms';


import { CourseService } from '../../Courses/courses.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   httpService: any;
  
 
student : Student  = {
  studentname : '',
    studentoccupation : '',
    fathername : '',
    fatheroccupation : '',
    dob : '',
    address : '',
    mob : '',
    whatsappno : '',
    parentno : '',
    email : '',
    course : []
}

  


  constructor(private service : CourseService){ }


  formGroup : FormGroup = new FormGroup({
    studentname : new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern("[A-Z a-z]*")]),
    studentoccupation : new FormControl('',[Validators.required,Validators.maxLength(50)]),
    fathername : new FormControl('',[Validators.required,Validators.maxLength(50)]),
    fatheroccupation : new FormControl('',[Validators.required,Validators.maxLength(50)]),
    dob : new FormControl('',[Validators.required,Validators.pattern("[0-9+-]*")]),
    address : new FormControl('',[Validators.required,Validators.maxLength(100)]),
    mobile : new FormControl('',[Validators.required,Validators.pattern("[0-9+-]*")]), 
     whatsappnbr : new FormControl('',[Validators.required,Validators.pattern("[0-9+-]*")]),
    parentnbr : new FormControl('',[Validators.required,Validators.pattern("[0-9+-]*")]),
    email : new FormControl('',[Validators.required,Validators.email]),
    course : new FormControl('',Validators.required)
})

public get date() :FormControl{
  return this.formGroup.get('date') as FormControl;
}

public get studentname() :FormControl{
  return this.formGroup.get('studentname') as FormControl;
}

public get studentoccupation() :FormControl{
  return this.formGroup.get('studentoccupation') as FormControl;
}

public get fathername() :FormControl{
  return this.formGroup.get('fathername') as FormControl;
}

public get fatheroccupation() :FormControl{
  return this.formGroup.get('fatheroccupation') as FormControl;
}

public get dob() :FormControl{
  return this.formGroup.get('dob') as FormControl;
}

public get address() :FormControl{
  return this.formGroup.get('address') as FormControl;
}

public get mobile() :FormControl{
  return this.formGroup.get('mobile') as FormControl;
}

public get whatsappnbr() :FormControl{
  return this.formGroup.get('whatsappnbr') as FormControl;
}

public get parentnbr() :FormControl{
  return this.formGroup.get('parentnbr') as FormControl;
}

public get email() :FormControl{
  return this.formGroup.get('email') as FormControl;
}


public get course() :FormControl{
  return this.formGroup.get('course') as FormControl;
}


public onSubmit() : void{
  console.log("coming")
  this.student = this.formGroup.value
}





selectedcourses =[3];
    courses = [
        { id: 1, name: 'JAVA' },
        { id: 2, name: 'C++' },
        { id: 3, name: 'C' },
        { id: 4, name: 'python' },
        { id: 5, name: '.Net' },
    ];
  
}


