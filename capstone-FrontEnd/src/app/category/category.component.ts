import { Component, OnInit } from '@angular/core';
import { AllApiService } from '../service/all-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private todo: AllApiService) { }

  tasks: any = []
  homeTask: any = []
  personalTask: any = []
  workTask:any=[]
  ngOnInit(): void {
  
    this.todo.gettask().subscribe((data) => {
      this.tasks = data;
      let j = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].category == "Home") {
          this.homeTask[j] = this.tasks[i]
          j++;
          console.log(this.homeTask[i]);
        }
      }
    })

    this.todo.gettask().subscribe((data1) => {
      this.tasks = data1;
      let j = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].category == "Personal") {
          this.personalTask[j] = this.tasks[i]
          j++;
          console.log(this.personalTask[i]);
        }
      }
    })

    this.todo.gettask().subscribe((data2) => {
      this.tasks = data2;
      let j = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].category == "Work") {
          this.workTask[j] = this.tasks[i]
          j++;
          console.log(this.workTask[i]);
        }
      }
    })


  }

}
