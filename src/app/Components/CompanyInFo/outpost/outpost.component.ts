import { Component } from '@angular/core';
import { CompanyInfoService } from '../rest.service';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './outpost.component.html',
  styleUrls: ['./outpost.component.css'],
})
export class CompanyInfoComponent {
  companies: any[] = [];
  companyinfo: any = {};
  baseUri: string = 'http://localhost:3000';

  viewComponent: string = 'displayall';
  httpClient: any;

  constructor(private httpService: CompanyInfoService) {
    httpService.getAllCompanies((data: any[]) => {
      this.companies = data;
    });
  }

  public onViewClick(id: number) {
    this.httpService.getCompany(id, (data: any) => {
      this.companyinfo = data;
    });
    this.viewComponent = 'display';
  }
  public onAddCompany(): void {
    this.companyinfo = {};
    this.viewComponent = 'add';
  }
  public addCompanyProcess(): void {
    this.httpService.addCompany(this.companyinfo, (data: any[]) => {
      this.companies = data;
    });

    this.viewComponent = 'displayall';
  }

  public onDeleteClick(id: number) {
    this.httpService.deleteCompany(id, (data: any[]) => {
      this.companies = data;
    });
    this.viewComponent = 'displayall';
  }

  public onUpdateClick(id: number): void {
    this.httpService.getCompany(id, (data: any) => {
      this.companyinfo = data;
    });
    this.viewComponent = 'update';
  }

  public updateCompanyProcess(id: number): void {
    this.httpService.updateCompany(id, this.companyinfo, (data: any) => {
      this.companies = data;
    });
    this.viewComponent = 'displayall';
  }
}
