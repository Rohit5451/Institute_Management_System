import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rating: number = 0;
  title: any;

 

  rate(value: number): void {
    this.rating = value;
  }

}
