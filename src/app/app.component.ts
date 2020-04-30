import { Component, Input } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTodo-Lab163';

  input:string;

  tasks:Task[] = [
    {title: "Do dishes", status: false},
    {title: "Make money", status: true},
    {title: "Eat cheeseburger", status: false}
  ]

  completeTask = function(t:Task){
    t.status = !t.status;
  }

  addTask = function(){
    this.tasks.push({title: this.input, status: false});
    this.input = "";
  }
}
