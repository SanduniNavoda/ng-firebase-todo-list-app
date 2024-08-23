import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../service/auth.service";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    NgIf
  ],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})
export class AppBarComponent implements AfterViewInit{

  @ViewChild("profilePic")
  private profilePicRef!: ElementRef<HTMLDivElement>;
  isMenuVisible = false; //create a flag
  constructor(protected authService: AuthService) {
  }

  ngAfterViewInit(): void {
    this.profilePicRef.nativeElement
      .style.backgroundImage =
      `url(${this.authService.getPrincipal()?.photoURL})`;
  }

  @HostListener("document:click", ['$event'])//by using HostListener we can set a listener to a particular component,
  //or can set an event targeting an any element in the dom tree
  //here we set listener (execute onDocumentClick() method) that when we click on the document (anywhere in the document)
  onDocumentClick(event: MouseEvent){
    this.isMenuVisible = false;
  }
}
