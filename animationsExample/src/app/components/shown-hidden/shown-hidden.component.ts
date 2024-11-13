import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { OpenCloseComponent } from '../open-close/open-close.component';


@Component({
  selector: 'app-shown-hidden',
  standalone: true,
  imports: [OpenCloseComponent],
  templateUrl: './shown-hidden.component.html',
  styleUrl: './shown-hidden.component.css',
  animations: [
    trigger('simpleFadeToggle', [
      state('shown', style({
        opacity: 1,
        height: '200px'
      })),
      state('hidden', style({
        opacity: 0,
        height: '0px'
      })),
    ])
  ]
})

export class ShownHiddenComponent {

  isShown = true;

  toggle() {
    this.isShown = !this.isShown;
  }
}

