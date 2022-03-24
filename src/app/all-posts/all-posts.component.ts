import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  // property to receive TodoService
  tdsrv: TodoService;

  constructor(todoService: TodoService) {
    // Assign the service as a property of component
    this.tdsrv = todoService
   }

  ngOnInit(): void {
    // grab the todo on component initialization
    this.tdsrv.getTodos()
  }

}
