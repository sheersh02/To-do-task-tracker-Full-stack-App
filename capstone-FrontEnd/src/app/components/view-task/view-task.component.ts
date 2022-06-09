import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public taskData: any) { }

  ngOnInit(): void {
    console.log(this.taskData);

  }

}
