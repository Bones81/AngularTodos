import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router"
import { Todo } from 'src/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  description: string = ""; // variable for description form field
  complete: boolean = false; // variable for complete form field
  tdsrv: TodoService; // variable for todo service
  route: ActivatedRoute; // variable for route service
  id: number | null | undefined = null; // variable for edited post if editing
  buttonLabel = "Create todo";
  router: Router; // variable for router service

  constructor(todoService: TodoService, route: ActivatedRoute, router: Router) {
    this.tdsrv = todoService;
    this.route = route;
    this.router = router;
  }

  // check to see if a post needs to be edited by looking for an id
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // fetch post from todoservice if there is an id in url
      const post = this.tdsrv.todos.find((p) => p._id == params["id"])
      if (post) {
        this.description = post.description
        this.complete = post.complete
        this.id = post._id
        this.buttonLabel = "Edit todo"
      }
    })
  }

  async handleSubmit() {
    console.log("Test")
    //if there is an id, edit the post, if not create a new post
    if (this.id) {
      //update the todo with the form data
      this.tdsrv.updateTodo({
        _id: this.id,
        description: this.description,
        complete: this.complete,
      })
    }
    // send back to the main page
    this.router.navigate(["/"])
  }
}
