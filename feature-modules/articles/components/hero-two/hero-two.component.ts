import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '@feature-modules/articles/interfaces/article.interface';

@Component( {
	selector: 'app-hero-two',
	templateUrl: './hero-two.component.html',
	styleUrls: [ '../../articles.module.scss' ]
} )
export class HeroTwoComponent {

	@Input() data: Article[];
	@Output() id = new EventEmitter();

	constructor() {
	}

	clickMe( data ) {
		this.id.emit( data );
	}

}
