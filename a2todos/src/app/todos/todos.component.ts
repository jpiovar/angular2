import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos;
  text;
  appState = 'default';
  oldText;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo(){
    var newTodo = {
      text: this.text
    }

    console.log(this.text);
    this.todos.push({
      text: this.text
    });

    this._todoService.addTodo(newTodo);
  }

  deleteTodo(todoText){ 
    console.log(todoText);
    for(var i in this.todos){
      if(this.todos[i].text == todoText){
        this.todos.splice(i, 1);
      }
    }
    
    this._todoService.deleteTodo(todoText);


  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo(){

    for(var i in this.todos){
      if(this.todos[i].text == this.oldText){
        this.todos[i].text = this.text;
      }
    }
    
    this._todoService.updateTodo(this.oldText, this.text);

  }


}
