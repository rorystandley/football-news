import { Component } from '@angular/core';
import { environment } from '../environment';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
} )
export class AppComponent {

	social;

	constructor() {
		this.social = environment.social
	}

}
