import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AllApiService } from 'src/app/service/all-api.service';
import { EntertaskComponent } from '../entertask/entertask.component';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { ViewTaskComponent } from '../view-task/view-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog, private todo: AllApiService, private router: Router, private landingPage: NavBarComponent) { }


  archiveTasks: any = []
  tasks: any
  ngOnInit(): void {

     this.todo.getArchive().subscribe((data1) => {
      this.archiveTasks = data1
    })

    this.todo.pendingTasks().subscribe((data) => {
      this.pendingData = data; 
    });
    this.todo.completedTasks().subscribe((data: any) => {
      this.completedTasks = data
    })

    this.todo.gettask().subscribe((data) => {
      this.tasks = data;
      console.log(data);

    })

    this.getDate();
    console.log(this.getDate);

   // this.tasks.paginator = this.paginator;
  }


  show = 'A'
  isShow = 'no'

  deletetask(id: any) {
    console.log(id);
    console.log(this.tasks);

    this.todo.delete(id).subscribe(() => {
      alert("Deleted Successfully")
      this.ngOnInit()
    }, (err) => {
      this.ngOnInit()
    });

    


  }


  movetoArchive(data: any) {
    console.log(data);
    this.todo.moveToArchive(data).subscribe((res) => {
      alert("Moved to Archive")
      this.ngOnInit();

    }, (err) => {
      alert("Task archived successfully")
      this.ngOnInit()
    })
  }

  minDate: any;

  getDate() {
    var date: any = new Date();
    var toDate: any = date.getDate();
    if(toDate < 10){
      toDate = "0" + toDate;
    }
    var month: any = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var year: any = date.getFullYear();
    console.log(toDate);
    this.minDate = year + "-" + month + "-" + toDate;
  }

  enterTask() {
    this.dialog.open(EntertaskComponent)
      .afterClosed()
      .subscribe(() => this.ngOnInit());
    this.ngOnInit()

  }

  updateTask(data: any) {
    console.log(data);

    this.dialog.open(UpdateTaskComponent, {
      data: {
        dataKey: data
      }
    })
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  view(data: any) {
    console.log(data);

    this.dialog.open(ViewTaskComponent, {
      width: '400px',

      data: {
        dataKey: data
      }
    });
  }

  pendingData: any = []
  completedTasks: any = []
  completed(id: any) {
    this.todo.markComplete(id).subscribe(() => {
      alert("Task Completed")
      this.ngOnInit()
    })
  }
  delete(id: any) {
    this.todo.delete(id).subscribe(() => {
      this.ngOnInit()
    }, (err) => {
      this.ngOnInit()
    });
  }

  moveToHome(data1: any) {
    this.todo.savetask(data1).subscribe(() => {
      alert("Moved back to Task")
      this.ngOnInit()
    })
  }

  deletea(id: any) {
    this.todo.deleteArchive(id).subscribe((res) => {
      console.log("deleted");
      this.ngOnInit()

    }, (err) => {

      this.ngOnInit()
    })
  }

  p: any = 1;
  count: any = 8;

}