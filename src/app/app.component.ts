import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
  task="";
  taskList:{id:number, name:string}[] = []
  completeList:string[] = []

  addtask(){
    if (!this.task || this.task.trim() === ''){
      alert('Task cannot be empty!');
      return;
    } else{
      this.taskList.push({id:this.taskList.length+1,name:this.task})
      this.task=""
    }
  }

  completetask(num:number){
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === num) {
        this.completeList.push(this.taskList[i].name);
        this.taskList.splice(i, 1);
        break;
      }
    }
    console.log(this.completeList)
  }

  deletetask(num:number){
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === num) {
        this.taskList.splice(i, 1);
        break;
      }
    }
  }
}
