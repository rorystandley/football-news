import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ArticlesModule } from '@feature-modules/articles/articles.module';
import { ArticleService } from '@feature-modules/articles/services/article/article.service';
import { MockArticleService } from '@mocks';

describe( 'HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			imports: [
				ArticlesModule
			],
			declarations: [ HomeComponent ],
			providers: [
				{ provide: ArticleService, useClass: MockArticleService }
			]
		} );

		fixture = TestBed.overrideComponent( HomeComponent, {
			set: {
				template: ''
			}
		} ).createComponent( HomeComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} ) );


	it( 'should create', () => {
		expect( component ).toBeTruthy();
	} );
} );
