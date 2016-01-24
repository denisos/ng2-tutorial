import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	inputs: ['hero'],
	templateUrl: 'partials/hero-detail.html'
//	,providers: [RouteParams, Router]
})

export class HeroDetailComponent implements OnInit {
	public hero: HERO;	

//	constructor(routeParams: RouteParams) {
//		let id = +routeParams.get('id');
//
//		console.log("in detail id is: ", id);
//	}

	ngOnInit() {
	//	let id = this._routeParams.get('id');
	 	let id=0;
		console.log("in detail id is: ", id);

	}
}