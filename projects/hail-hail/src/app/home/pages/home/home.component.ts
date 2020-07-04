import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@feature-modules/articles/services/article/article.service';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

	data;

	constructor( private articlesService: ArticleService ) {
	}

	ngOnInit() {
		this.articlesService.get().subscribe( resp => {
			this.data = resp;
		} );

	}

	navigate( id ) {
	}

}
