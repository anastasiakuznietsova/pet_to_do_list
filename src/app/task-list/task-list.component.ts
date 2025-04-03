import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { TaskListService } from './task-list-temp.sevice';
import { TaskInputComponent } from "../task-input/task-input.component";
import { Task } from './task.model';


@Component({
  selector: 'app-task-list',
  imports: [NgFor, NgIf, NgStyle, TaskInputComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  private taskListService = inject(TaskListService);
  task_list_array=signal(this.taskListService.get_list());

  isStatusBox=signal(false);
  id_task=signal(0);


  addTask(task_input:string){
    this.taskListService.add_task(task_input)
  }
  getStatusColor(status:string){
    switch (status){
      case 'Not started': return 'var(--red-button)';
      case 'In progress': return 'var(--light-blue)';
      default : return 'var(--light-green)';
    }
  }

  openStatusBox(id:number){
    this.isStatusBox.set(true);
    this.id_task.set(id)
  }
  closeStatusBox(){
    this.isStatusBox.set(false);
  }

  changeStatus(status:string){
    this.taskListService.change_tasks_status(this.id_task(), status);
    this.closeStatusBox();
  }
  deleteTask(id:number){
    this.taskListService.delete_task(id);
  }

  filterTasks(status:string){
    this.task_list_array.set(this.taskListService.get_task_by_status(status));
  }
  displayAll(){
    this.task_list_array.set(this.taskListService.get_list());
  }

  deleteDoneTasks(){
    this.task_list_array.set(this.taskListService.delete_done());
  }
}
