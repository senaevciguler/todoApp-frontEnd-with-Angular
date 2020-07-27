import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public hardcodeAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit(): void {
  }

}
