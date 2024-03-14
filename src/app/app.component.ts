import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoTasks: any = [];

  filter: any = 'all';

  addNewToDo(task: any) {
    let tasdAddtion = { "text": task, "status": false };
    this.todoTasks.push(tasdAddtion);
  }

  deleteTask(index: number) {
    this.todoTasks.splice(index, 1);
  }

  completedTask(index: number) {
    this.todoTasks[index].status = true;
  }

}
