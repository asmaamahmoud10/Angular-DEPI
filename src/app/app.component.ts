import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  name: string = '';

  content = [
    { age: 21, name: 'Salma', salary: 20000 },
    { age: 20, name: 'Ahmed ', salary: 30000},
    { age: 30, name: 'Mahmoud', salary: 50000 }
  ];

}
