import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() messageFromParent: string = '';
  @Output() messageEvent = new EventEmitter();

  sendMessage() {
    this.messageEvent.emit('From Child!');
  }
}
