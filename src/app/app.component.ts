import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpened: boolean = false;
  menuBackgroundClass = ""

  
  constructor(private router: Router) {
      router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe( (e: NavigationEnd) => {
        let url = e.url

        if(url === '/') {
          this.menuBackgroundClass = "bg-dark"
        } else if(url === '/animedlr') {
          this.menuBackgroundClass = "bg-primary"
        } else if(url === '/mangadlr') {
          this.menuBackgroundClass = "bg-success"
        } else if(url === '/kamuy') {
          this.menuBackgroundClass = "bg-danger"
        } else if(url === '/ranobe') {
          this.menuBackgroundClass = "bg-primary"
        } else {
          this.menuBackgroundClass = "bg-dark"
        }
      }
    )
  }


  toggle() {
    this.menuOpened = !this.menuOpened;
  }

}
