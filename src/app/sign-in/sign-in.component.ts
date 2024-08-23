import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCardImage} from "@angular/material/card";
import {Title} from "@angular/platform-browser";
import {AuthService} from "../service/auth.service";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatButton,
    MatCardImage,
    MatIcon
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(protected authService: AuthService,
              titleService: Title) {//auth, router, Title has to be got through dependency injection
    titleService.setTitle("Sign-in To-do List")
  }

}
