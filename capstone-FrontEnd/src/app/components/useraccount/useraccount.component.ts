import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { AllApiService } from 'src/app/service/all-api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  counter: any = 0
  ngOnInit(): void {
    //this.openSnackBar()

    this.counter = sessionStorage.getItem("count")
    console.log(this.counter);


    this.allapi.getImage().subscribe((a: any) => {
      console.log(a);
      this.retrieveResonse = a;
      this.base64Data = this.retrieveResonse[0].data


      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;


      console.log("inside ng onit");

    }, (error: any) => {
      console.log(error);

    })
  }
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map((result: { matches: any; }) => result.matches),
      shareReplay()
    );
  countNotification: any = 0;
  constructor(private breakpointObserver: BreakpointObserver, private allapi: AllApiService, private authService: AuthService, private router: Router) {
    this.countNotification = this.allapi.notificationCount


  }

  username = localStorage.getItem("username")

  logout() {
    this.authService.logout();
    console.log("hi");
    this.router.navigate(['/login'])
  }
  
}
