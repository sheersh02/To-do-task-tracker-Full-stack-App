import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllApiService } from 'src/app/service/all-api.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient, private todoservice: AllApiService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }
  formData: any = {};
  addUser = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  get username() { return this.addUser.controls['username'] }
  get password() { return this.addUser.controls['password'] }

  token: any = {}

  login(data: any) {
    this.todoservice.loginUser(data).subscribe((data) => {
      this.token = data;
      localStorage.setItem("token", this.token.token)
      
      this.authService.logincheck();
      this.router.navigate([this.authService.redirectUrl])
    },
      (err) => {
        alert("invalid cred")
      })
  }
  signUp() {
    this.router.navigate(['/register'])
  }

}
