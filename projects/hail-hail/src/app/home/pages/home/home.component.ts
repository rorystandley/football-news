import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../../../../core/services/news.service';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

	data;

	constructor( private newsService: NewsService ) {
	}

	ngOnInit() {
		this.newsService.get().subscribe( resp => {
			console.log( resp );
			this.data = resp;
		} );
	}

}
