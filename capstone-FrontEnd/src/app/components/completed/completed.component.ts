import { Component, OnInit } from '@angular/core';
import { AllApiService } from 'src/app/service/all-api.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private todo: AllApiService) { }

  archiveTasks: any = []

  ngOnInit(): void {
    this.todo.getArchive().subscribe((data1) => {
      this.archiveTasks = data1
    })
  }

  delete(id: any) {
    this.todo.deleteArchive(id).subscribe((res) => {
      console.log("deleted");
      this.ngOnInit()

    }, (err) => {

      this.ngOnInit()
    })
  }
  moveToHome(data1: any) {
    this.todo.savetask(data1).subscribe(() => {
      alert("Moved back to Task")
      this.ngOnInit()
    })
  }


}
