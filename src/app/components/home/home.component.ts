import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('oppen', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0.1)'
      })),
      state('active',   style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('6s 13000ms')),
      transition('active => inactive', animate('6s 13000ms'))
    ]),
    trigger('nav-animation', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0.1)'
      })),
      state('active',   style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('3000ms')),
      transition('active => inactive', animate('3000ms'))
    ]),
  ]
})

export class HomeComponent implements OnInit {
  state = 'inactive';
  display = true;
  show = 'inactive';
  showNav = false;

  @ViewChild('videoRef') private videoRef: ElementRef<HTMLVideoElement>;
  @ViewChild('musicRef') private musicRef: ElementRef<HTMLAudioElement>;
  constructor() { }

  ngOnInit(): void {
  }

  togleButton(): void{
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
  noneDisplay(): void{
    this.videoRef.nativeElement.play();
    this.musicRef.nativeElement.play();

    this.display = false;
  }

  showNavbar(): void{
    this.showNav = true;
    this.show = this.show === 'inactive' ? 'active' : 'inactive';
  }

}
