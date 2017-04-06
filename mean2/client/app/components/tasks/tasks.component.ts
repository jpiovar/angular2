import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'

})

export class TasksComponent { 
    tasks: Task[];
    item: string;

    constructor(private taskService: TaskService){
        this.taskService.getTasks()
            .subscribe(items => {
                //console.log(items);
                this.tasks = items;
            });
    }

    addTask(event){
        event.preventDefault();
        console.log(this.item);
        var newTask = {
            id: 10,
            item: this.item//,
            //isDone: false
        }

        //this.tasks.push(newTask);

        this.taskService.addTask(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.item = '';
            });
    }
}