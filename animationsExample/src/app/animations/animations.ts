import { trigger, group, style, animate, transition, query, animateChild,  } from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('routingUno <=> routingDos', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('5s ease-out', style({ left: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('4s ease-out', style({ opacity: 100 }))
        ], { optional: true }),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('10s ease-out', style({ left: '100%', opacity: 0, background: "red" }))
        ], { optional: true }),
        query(':enter', [
          animate('1s ease-out', style({ left: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ])
  ]);