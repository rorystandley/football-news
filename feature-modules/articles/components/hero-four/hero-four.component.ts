import { Component, Input } from '@angular/core';

@Component( {
	selector: 'app-hero-four',
	templateUrl: './hero-four.component.html',
	styleUrls: [ './hero-four.component.scss' ]
} )
export class HeroFourComponent {

	@Input() data;

	constructor() {
	}

}
