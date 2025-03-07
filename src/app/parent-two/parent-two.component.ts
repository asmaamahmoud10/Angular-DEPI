import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent {
  parentMessage = 'Hello from Parent Two!';

  handleMessage() {
    console.log("Parent two");
  }
}
