import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable( {
	providedIn: 'root'
} )
export class NewsService {

	constructor(private http: HttpClient) {
	}

	get(): Observable<any> {
		return this.http.get( '/profile-management-core/v1/my-profile' );
	}
}
