import {Task} from './task';
import { Injectable } from '@angular/core';
import { getLocaleCurrencyCode } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task[] = [
    {id:1, description: 'tarefa1', categoria:'Casa', completed: true },
    {id:2, description: 'tarefa2', categoria:'Quarto', completed: false },
    {id:3, description: 'tarefa3', categoria:'Trabalho', completed: true },
    {id:4, description: 'tarefa4', categoria:'Casa', completed: false },
    {id:5, description: 'tarefa5', categoria:'Quarto', completed: true },
    {id:6, description: 'tarefa6', categoria:'Trabalho', completed: false },
    {id:7, description: 'tarefa7', categoria:'Casa', completed: true },
    {id:8, description: 'tarefa8', categoria:'Quarto', completed: false },
    {id:9, description: 'tarefa9', categoria:'Trabalho', completed: true },
    {id:10, description: 'tarefa10', categoria:'Casa', completed: false },
   

  ]


 
  constructor() { }

  getAll(){
    return this.task;
  }



}





