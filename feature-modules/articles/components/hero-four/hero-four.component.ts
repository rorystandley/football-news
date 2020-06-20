import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component( {
	selector: 'app-hero-four',
	templateUrl: './hero-four.component.html',
	styleUrls: [ './hero-four.component.scss' ]
} )
export class HeroFourComponent {

	@Input() data;
	@Output() id = new EventEmitter();

	constructor() {
	}

	clickMe( data ) {
		this.id.emit( data );
	}

}
