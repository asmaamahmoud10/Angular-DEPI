import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent {
  parentMessage = 'Hello from Parent One!';

  handleMessage() {
    console.log("Parent one");
  }
}
