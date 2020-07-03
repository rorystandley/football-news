import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '@feature-modules/articles/interfaces/article.interface';

@Component( {
	selector: 'app-two-up-three-down',
	templateUrl: './two-up-three-down.component.html',
	styleUrls: [ '../../articles.module.scss' ]
} )
export class TwoUpThreeDownComponent {

	@Input() data: Article[];
	@Output() id = new EventEmitter();

	constructor() {
	}

	clickMe( data ) {
		this.id.emit( data );
	}

}
