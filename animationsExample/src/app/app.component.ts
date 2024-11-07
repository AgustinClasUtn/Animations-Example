import { Component } from '@angular/core';
import { RouterOutlet, Router} from '@angular/router';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    slideInAnimation
  ]

})
export class AppComponent {
  title = 'animationsExample';

  constructor(private contexts: ChildrenOutletContexts, private router: Router) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  GoTo(path: string) {
    this.router.navigate([path]);
  }
}
