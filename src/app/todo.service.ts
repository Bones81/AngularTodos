import { Injectable } from '@angular/core';
import { Todo } from '../types'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // url of API
  url = 'http://localhost:3000/todos'
  // property to hold array of todos from api
  todos: Array<Todo> = [];

  //get todos when service is constructed
  constructor() {
    this.getTodos();
   }

   // method to get todos
   async getTodos() {
     const response = await fetch(this.url)
     const data = await response.json()
     this.todos = data
     return data
   }

   // method to create todos
   async createTodo(todo: Todo) {
     await fetch(this.url, {
       method: 'post',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(todo)
     })
     this.getTodos()
   }

   // method to update todos
   async updateTodo(todo: Todo) {
     await fetch(this.url + todo._id + "/", {
       method: 'put',
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(todo),
     })

     this.getTodos();
   }

   // method to delete todos
   async deleteTodo(todo: Todo) {
     await fetch(this.url + todo._id + '/', {
       method: 'delete',
     })

     return this.getTodos()
   }



}
