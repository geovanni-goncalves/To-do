import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  Tasks: Task [] = [];

  constructor(private taskSevice:TaskService ) { }

  ngOnInit() {  
    this.Tasks = this.taskSevice.getAll();


  }

}
