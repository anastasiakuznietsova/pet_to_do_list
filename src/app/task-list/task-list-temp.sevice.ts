import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
    providedIn: 'root' 
  })
export class TaskListService{
    task_list_temp: Task[]=[]

    id_count=1;
    get_list (){
        return this.task_list_temp;
    }
    get_task_by_status(status:string){
        return this.task_list_temp.filter(task=>task.task_status===status);
    }
    delete_task(id:number){
        const index=this.task_list_temp.findIndex(task=>task.id===id);
        if(index!=-1){
            this.task_list_temp.splice(index,1);
        }
    }
    delete_done(){
        return this.task_list_temp=this.task_list_temp.filter(task=>task.task_status!='Done');
        // return this.get_list()
    }
    add_task(task_text: string){
        if (task_text!=''){
            this.task_list_temp.push({id:this.id_count, task_text:task_text, task_status:'Not started'});
            this.id_count+=1;
        }
    }
    change_tasks_status(id:number, status: string){
        const index=this.task_list_temp.findIndex(task=>task.id===id);
        if(index!=-1){
            this.task_list_temp[index].task_status=status;
        }
    }
}