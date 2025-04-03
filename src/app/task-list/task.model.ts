export interface Task{
    id:number;
    task_text:string;
    task_status:'Not started'|'In progress'|'Done'|string;
}