import { Router } from '@angular/router';
import { TodoDataService } from './../data/todo-data.service';
import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done:boolean,
    public targetDate:Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message:String
    /*
    [
   new Todo(1,'learn to language',false,new Date()),
   new Todo(2,'do your own project',false,new Date()),
   new Todo(3,'visit Family',false,new Date())
  ]
  */

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(){
    this.refreshTodos();
   
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('Sena').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }
  completeItem(id){
    console.log(`complete todo ${id}`)
    this.todoService.deleteTodo('sena', id).subscribe(
      response => {
        console.log(response);
        this.message =`Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('sena', id).subscribe(
      response => {
        console.log(response);
        this.message =`Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id){
  console.log(`update ${id}`)
  this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
