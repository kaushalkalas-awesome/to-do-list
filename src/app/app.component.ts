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
  completeList:{name:string}[] = []

  addtask(){
    this.taskList.push({id:this.taskList.length+1,name:this.task})
    this.task=""
  }

  completetask(num:number){
    for(let completetask of this.taskList)
      this.completeList.push({name:completetask.name})
    this.taskList.splice(num,1)
  }

  deletetask(num:number){
    this.taskList.splice(num,1)
    console.log(this.taskList)
  }
}
