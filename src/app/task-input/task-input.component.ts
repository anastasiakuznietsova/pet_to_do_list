import { Component, EventEmitter, Input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
  new_task=signal<string>('');
  @Output() add_task_listener=new EventEmitter<string>();

  addTask(){
    this.add_task_listener.emit(this.new_task());
    this.new_task.set('');
  }
}
