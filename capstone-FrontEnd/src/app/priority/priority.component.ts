import { Component, OnInit } from '@angular/core';
import { AllApiService } from '../service/all-api.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  constructor(private todo: AllApiService) { }
  tasks: any = []
  Hightask: any = []
  MediumTask: any = []
  LowTask: any = []

  ngOnInit(): void {
    // High task 
    this.todo.gettask().subscribe((data) => {
      this.tasks = data;
      let j = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].priority == "HIGH") {
          this.Hightask[j] = this.tasks[i]
          j++;
          console.log(this.Hightask[i]);
        }

      }
    })

    // Medium task 

    this.todo.gettask().subscribe((data) => {
      this.tasks = data;
      let j = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].priority == "MEDIUM") {
          this.MediumTask[j] = this.tasks[i]
          j++;
          console.log(this.MediumTask[i]);
        }

      }
    })

    // Low task 
    this.todo.gettask().subscribe((data) => {
      this.tasks = data;
      let j = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].priority == "LOW") {
          this.LowTask[j] = this.tasks[i]
          j++;
          console.log(this.LowTask[i]);
        }

      }
    })
  }











}
