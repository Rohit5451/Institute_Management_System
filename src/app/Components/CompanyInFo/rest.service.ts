import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyInfoService {
  baseUri: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getAllCompanies(callback: any) {
    this.httpClient.get(this.baseUri + '/companyinfo').subscribe((data) => {
      callback(data);
    });
  }

  public getCompany(id: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/companyinfo/' + id)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addCompany(student: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/companyinfo', student)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/companyinfo')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public deleteCompany(id: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/companyinfo/' + id)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/companyinfo')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateCompany(id: number, student: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/companyinfo/' + id, student)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/companyinfo')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }
}
