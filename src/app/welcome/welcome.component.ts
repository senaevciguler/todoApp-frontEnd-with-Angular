import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from '../data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title:"welcome";
  message:"this will be todo application";
  name = ''
  welcomeMessageFromService:string

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']

  }
  
 getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
     //console.log('last line of getWelcomeMessage')
  }
  getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
     //console.log('last line of getWelcomeMessage')
  }
  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }
  handleErrorResponse(error){
    //console.log(error);
    //console.log(error.error);
    //console.log(error.message);
    this.welcomeMessageFromService = error.error.message

  }
  

}
