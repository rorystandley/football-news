import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleService } from '@feature-modules/articles/services/article/article.service';
import { MockArticleService } from '@mocks';
import { HeroTwoComponent } from '@feature-modules/articles/components/hero-two/hero-two.component';

describe( 'HeroTwoComponent', () => {
	let component: HeroTwoComponent;
	let fixture: ComponentFixture<HeroTwoComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ HeroTwoComponent ],
			providers: [
				{ provide: ArticleService, useClass: MockArticleService }
			]
		} );

		fixture = TestBed.overrideComponent( HeroTwoComponent, {
			set: {
				template: ''
			}
		} ).createComponent( HeroTwoComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} ) );

	describe( 'clickMe()', () => {

		it( 'should emit to parent', () => {
			spyOn( component.id, 'emit' );
			component.clickMe( 'test' );
			expect( component.id.emit ).toHaveBeenCalledWith( 'test' );
		} );

	} );


} );
