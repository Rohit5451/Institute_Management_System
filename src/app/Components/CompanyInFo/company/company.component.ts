import { Component } from '@angular/core';
import { CompanyInfoService } from '../../CompanyInFo/rest.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  companies: any[] = [];
  companyinfo: any = {};
  viewComponent: string = 'displayall';
  httpClient: any;

  baseUri: string = 'http://localhost:3000';
  constructor(private httpService: CompanyInfoService) {
    
  }

  public addCompanyProcess(): void {
    this.httpService.addCompany(this.companyinfo, (data: any[]) => {
      this.companies = data;
    });

    
  }





}
