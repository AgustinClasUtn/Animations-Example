import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationOptions } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css',
  animations: [
    trigger('openClose', [ 
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'red'
      })),
      transition('open => closed', [
        animate('1s ease-out') // ,step-end
      ],),
      transition('closed => open', [
        animate('10s')
      ]),
    ]),
  ],
})

export class OpenCloseComponent {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
