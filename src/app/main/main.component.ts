import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppBarComponent} from "../app-bar/app-bar.component";
import {Task, TaskService} from "../service/task.service";
import {AuthService} from "../service/auth.service";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AppBarComponent,
    MatCheckbox,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    MatButton
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  taskList: Array<Task> = [];
  description = "";
  constructor(titleService: Title,
              private authService: AuthService,
              protected taskService: TaskService) {//inject the task service that we created to receive an object from it
    titleService.setTitle("To-do List");
    taskService.getTasks(authService.getPrincipalEmail()!).subscribe(
      taskList => {
        this.taskList = taskList//list will assign to the instance variable in above
        this.taskList.sort((task1: Task, task2: Task) => {
          if(task1.timestamp.toMillis() > task2.timestamp.toMillis()) return 1;
          else if(task1.timestamp.toMillis() === task2.timestamp.toMillis()) return 0;
          else return -1;
        })
      }

    );
  }

  async addTask(txt: HTMLInputElement){
    if(!this.description.trim().length){
      txt.select();
      txt.focus();
      return;
    } else {
      try{
        await this.taskService.createTask(this.description, this.authService.getPrincipalEmail()!);
        this.description = "";//if the task saved in database, text field will clear
        txt.focus();//get focus to the text filed
      }catch (e) {
        console.log(e);
        alert("Failed to save the task, try again!")
      }
    }

  }
}
