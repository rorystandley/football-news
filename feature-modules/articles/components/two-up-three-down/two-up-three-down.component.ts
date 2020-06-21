import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component( {
	selector: 'app-two-up-three-down',
	templateUrl: './two-up-three-down.component.html',
	styleUrls: [ './two-up-three-down.component.scss' ]
} )
export class TwoUpThreeDownComponent {

	@Input() data;
	@Output() id = new EventEmitter();

	constructor() {
	}

	clickMe( data ) {
		this.id.emit( data );
	}

}
