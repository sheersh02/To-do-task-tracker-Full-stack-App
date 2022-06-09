import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CompletedComponent } from './components/completed/completed.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RegisterComponent } from './components/register/register.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { PriorityComponent } from './priority/priority.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: NavBarComponent,
    children:[
      {
        path:"category",
        component:CategoryComponent
      },
      {
        path:"tasks",
        component: HomeComponent
      },
      {
        path:"priority",
        component: PriorityComponent
      },
      {
        path:"archive",
        component: CompletedComponent
      },
      {
        path:"notification",
        component:NotificationComponent
      },
      {
        path:"editprofile",
        component:EditprofileComponent
      }
    ]
  },
  
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
