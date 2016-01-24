import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

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
	directives: [ROUTER_DIRECTIVES, HeroDetailComponent]
})
@RouteConfig([
	{path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent implements OnInit {
	public title = 'Tour of Heroes';
	public selectedHero: Hero;
	public heroes: Hero[];

	constructor(private _heroService: HeroService,
		        private _router: Router) { 
	}

	onSelect(hero: Hero) {
		// original way using binding 
		this.selectedHero = hero; 

console.log("nav to id: ", hero.id);

		// new: try with router
		this._router.navigate(['HeroDetail', {id: hero.id}])
	}

	getHeroes() {
		this._heroService.getHeroes()
							.then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}
}


