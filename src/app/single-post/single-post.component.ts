import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router"
import { TodoService } from '../todo.service'
import { Todo } from '../../types'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  id: number | null = null // variable for param id
  route //variable for route service
  tdsrv // variable for todo service
  post: Todo = {
    description: "",
    complete: false,
  } // variable to hold the selected post
  router: Router // variable to hold router service

  constructor(route: ActivatedRoute, todoService: TodoService, router: Router) {
    // assign services to properties
    this.route = route
    this.tdsrv = todoService
    this.router = router //variable for todo service
   }

  ngOnInit(): void {
    // get the URL Param
    this.route.params.subscribe((params) => {
      //store the id in our properties
      this.id = params["id"]
      // find post from our service with the selected todo
      const post = this.tdsrv.todos.find((p) => p._id == params['id'])
      //if post exists assign it to post property
      if (post) {
        this.post = post
      }
    })
  }

  // function to delete a todo
  async deleteTodo() {
    await this.tdsrv.deleteTodo(this.post)
    this.router.navigate(["/"])
  }

}
