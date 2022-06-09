import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AllApiService } from 'src/app/service/all-api.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  counter: any = 0
  ngOnInit(): void {

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
