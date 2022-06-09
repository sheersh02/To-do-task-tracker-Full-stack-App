import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllApiService } from 'src/app/service/all-api.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private todo: AllApiService, @Inject(MAT_DIALOG_DATA) public taskData: any) { }

  ngOnInit(): void {
    console.log(this.taskData);
    this.getDate()

  }
  data: any = []


  updateTask(form: any, taskId: any) {
    console.log("data shown here");
    console.log(this.data);
    console.log("inside updated form");
    console.log(form);
    this.todo.updateTask(form, taskId).subscribe(() => {
      alert("Successfully Updated")
      this.ngOnInit();
    })
  }

  updateform = new FormGroup({
    taskId: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    priority: new FormControl(),
    category: new FormControl()
  })

  get updatedtaskId() { return this.updateform.controls['taskId'] }
  get updatedtasktitle() { return this.updateform.controls['title'] }
  get updateddescription() { return this.updateform.controls['description'] }
  get updatedstartdate() { return this.updateform.controls['startDate'] }
  get updatedenddate() { return this.updateform.controls['endDate'] }
  get updatedpriority() { return this.updateform.controls['priority'] }
  get updatedcategory() { return this.updateform.controls['category'] }




  minDate: any;

  getDate() {
    var date: any = new Date();
    var toDate: any = date.getDate();
    if(toDate < 10){
      toDate = "0" + toDate;
    }
    var month: any = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    var year: any = date.getFullYear();
    console.log(toDate);
    this.minDate = year + "-" + month + "-" + toDate;
  }
}
