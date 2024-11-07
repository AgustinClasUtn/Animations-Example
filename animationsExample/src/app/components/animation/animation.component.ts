import { Component } from '@angular/core';
import { ShownHiddenComponent } from '../shown-hidden/shown-hidden.component';
import { OpenCloseComponent } from '../open-close/open-close.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [ShownHiddenComponent, OpenCloseComponent],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
})

export class AnimationComponent {

  constructor(private router:Router){
  }

  Navigate(){
    this.router.navigate(["animationList"]);
  }
}
