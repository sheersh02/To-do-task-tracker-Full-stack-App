import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllApiService } from 'src/app/service/all-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  constructor(private router: Router, private httpClient: HttpClient, private todoService: AllApiService) { }

  ngOnInit(): void {
  }

  register = new FormGroup({
    
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required,Validators.pattern("[^ ]{8,16}")]),
    contact: new FormControl('', [Validators.required, Validators.pattern("^[7-9][0-9]{9}$")]),
    gender: new FormControl('', Validators.required),

  })
  get email() { return this.register.controls['email'] }
  
  get password() { return this.register.controls['password'] }
  
  get gender() { return this.register.controls['gender'] }
  
  get username() { return this.register.controls['username'] }
  
  get contact() { return this.register.controls['contact'] }
  

  saveUser(data: any) {
    console.log("subscribing observable");
    this.todoService.register(data).subscribe((a) => {
      console.log(a);
      alert("Registered Successfully")
      this.router.navigate(['/login'])
    },
      (err) => {
        alert("Already Registered")
        console.log(err);
      });
  }


}
