import {Component, OnInit, ViewEncapsulation} from 'angular2/core';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

// <input value={{hero.name}}  ...>   one way binding
// <input [(ngModel)]="hero.name"  ...>   two way binding
//
@Component({
	selector: 'my-app',
	templateUrl: 'partials/heroes-list.html',
	styleUrls:['app/app.component.css'],
	encapsulation: ViewEncapsulation.Native,
	providers: [HeroService],
	directives: [HeroDetailComponent]
})

export class AppComponent implements OnInit {
	public title = 'Tour of Heroes';
	public selectedHero: Hero;
	public heroes: Hero[];

	constructor(private _heroService: HeroService) { }

	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes() {
		this._heroService.getHeroes()
							.then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}
}


