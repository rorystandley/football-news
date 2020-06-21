import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '@feature-modules/articles/interfaces/article.interface';

@Injectable( {
	providedIn: 'root'
} )
export class ArticleService {

	mockNews = [
		{
			_id: '5e6d5d40083f3c0017c9dc7d',
			title: 'Lennon Addresses Celtic Loan \'Quirk\' As He Hints At Talks Over Southampton Duo',
			description: 'Mohamed Elyounoussi and Fraser Forster\'s situation amid the current shutdown remains unclear.',
			source: 'Daily Record',
			url: 'https://www.dailyrecord.co.uk/sport/football/football-transfer-news/neil-lennon-addresses-celtic-loan-21694391',
			image: 'https://i2-prod.dailyrecord.co.uk/incoming/article21645251.ece/ALTERNATES/s1200/0_19886539.jpg',
			tenant: 'celtic',
			timestamp: '2020-03-14T22:40:00.452Z',
			views: 0,
		},
		{
			_id: '5e6d5e6c083f3c0017c9dc7e',
			title: 'Neil Lennon On What He Will Do With His Celtic Players When They Have No One To Play Against',
			description: 'WHAT do you do with a group of footballers when they have nobody to play football against? ' +
				'That is the question being pondered by managers and…',
			source: 'Glasgow Evening Times',
			url: 'https://www.glasgowtimes.co.uk/sport/18305912.neil-lennon-will-celtic-players-no-one-play/',
			image: 'https://www.glasgowtimes.co.uk/resources/images/11153169/',
			tenant: 'celtic',
			timestamp: '2020-03-14T22:45:00.551Z',
			views: 0,
		},
		{
			_id: '5e6d5e6c083f3c0017c9dc7f',
			title: 'Ryan Christie Fears Bankruptcies As Celtic Star Assesses Coronavirus Impact',
			description: 'It\'s not clear when football will be able to resume and many clubs need gate receipts to balance the books.',
			source: 'Daily Record',
			url: 'https://www.dailyrecord.co.uk/sport/football/football-news/ryan-christie-fears-bankruptcies-celtic-21693362',
			image: 'https://i2-prod.dailyrecord.co.uk/incoming/article21610630.ece/ALTERNATES/s1200/0_19879684.jpg',
			tenant: 'celtic',
			timestamp: '2020-03-14T22:45:00.623Z',
			views: 0,
		},
		{
			_id: '5e6d5e6c083f3c0017c9dc7e',
			title: 'Neil Lennon On What He Will Do With His Celtic Players When They Have No One To Play Against',
			description: 'WHAT do you do with a group of footballers when they have nobody to play football against? ' +
				'That is the question being pondered by managers and…',
			source: 'Glasgow Evening Times',
			url: 'https://www.glasgowtimes.co.uk/sport/18305912.neil-lennon-will-celtic-players-no-one-play/',
			image: 'https://www.glasgowtimes.co.uk/resources/images/11153169/',
			tenant: 'celtic',
			timestamp: '2020-03-14T22:45:00.551Z',
			views: 0,
		},
		{
			_id: '5e6d5e6c083f3c0017c9dc7e',
			title: 'Neil Lennon On What He Will Do With His Celtic Players When They Have No One To Play Against',
			description: 'WHAT do you do with a group of footballers when they have nobody to play football against? ' +
				'That is the question being pondered by managers and…',
			source: 'Glasgow Evening Times',
			url: 'https://www.glasgowtimes.co.uk/sport/18305912.neil-lennon-will-celtic-players-no-one-play/',
			image: 'https://www.glasgowtimes.co.uk/resources/images/11153169/',
			tenant: 'celtic',
			timestamp: '2020-03-14T22:45:00.551Z',
			views: 0,
		}
	];

	constructor( private http: HttpClient ) {
	}

	get(): Observable<Article[]> {
		return of( this.mockNews );
		// return this.http.get( '/profile-management-core/v1/my-profile' );
	}
}
