import { HardcodeAuthenticationService } from './../hardcode-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BasicAuthenticationService} from '../service/basic-authentocation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='sena'
  password=''
  errorMessage ='Invalid Login'
  invalidLogin = false
 
  constructor(private router:Router, public hardcodeAuthenticationService: HardcodeAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
  {
    if(this.hardcodeAuthenticationService.authentication(this.username,this.password)){
      this.invalidLogin = false 
      this.router.navigate(['welcome',this.username])
   }else{
     this.invalidLogin = true
   }
  }

}
handleBasicAuthLogin(){
  {
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
    .subscribe(
      data =>{
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
      },
      error =>{
        console.log(error)
        this.invalidLogin = true
      }
    )
       
  }

}
handleJWTBasicAuthLogin(){
  {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
    .subscribe(
      data =>{
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false
      },
      error =>{
        console.log(error)
        this.invalidLogin = true
      }
    )
       
  }

}

}