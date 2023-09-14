export interface Product{
    productId : number;
    productName : string;
    productPrice : number;
    image : string;
}

export interface Student{
    
    studentname : string;
    studentoccupation : string;
    fathername : string;
    fatheroccupation : string;
    dob : string;
    address : string;
    mob : string;
    whatsappno : string;
    parentno : string;
    email : string;
    course : [];
} 

export interface Employee{
    empno:number,
    name:string,
    address:string,
    phone:string,
    salary:number
}
