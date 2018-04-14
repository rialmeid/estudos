import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  hero = {name : 'Ricardo'};

  onClick() {
    this.title = 'click no angular';
    console.log(this.title);
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
