import { of } from 'rxjs';

export class MockArticleService {
	get() {
		return of( {} );
	}
}
