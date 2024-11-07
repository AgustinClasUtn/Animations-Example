import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animation-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './animation-list.component.html',
  styleUrl: './animation-list.component.css',
  animations: [
    trigger('listAnimation', [ 
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-100px)', background: "red"}),
          stagger('5s', [
            animate('1s', style({ opacity: 1, transform: 'translateY(0)'}))
          ])
        ], { optional: true }),
        query(':leave', [
          stagger('100ms', [
            animate('1s', style({ opacity: 0,  "margin-top":"16rem"}))
          ])
        ], { optional: true })
      ])
    ])
  ]
})

export class AnimationListComponent {

  items = ['Item 1', 'Item 2', 'Item 3'];
  contador = 0;

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
    this.contador++;
  }

  removeItem() {
    this.items.pop();
  }
}
