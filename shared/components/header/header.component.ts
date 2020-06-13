import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../../interfaces/social.interface';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements OnInit {

	@Input() social: Social;

	constructor() {
	}

	ngOnInit() {
	}

}
