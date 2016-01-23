import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	inputs: ['hero'],
	templateUrl: 'partials/hero-detail.html'
})

export class HeroDetailComponent {
	public hero: HERO;	
}