import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormComponent } from './form/form.component'

const routes: Routes = [
  { path: "post/:id", component: SinglePostComponent },
  { path: "new", component: FormComponent },
  { path: "edit/:id", component: FormComponent },
  { path: "", component: AllPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
