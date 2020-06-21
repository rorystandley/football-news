import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleService } from '@feature-modules/articles/services/article/article.service';
import { MockArticleService } from '@mocks';
import { HeroFourComponent } from '@feature-modules/articles/components/hero-four/hero-four.component';

describe( 'HeroFourComponent', () => {
	let component: HeroFourComponent;
	let fixture: ComponentFixture<HeroFourComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ HeroFourComponent ],
			providers: [
				{ provide: ArticleService, useClass: MockArticleService }
			]
		} );

		fixture = TestBed.overrideComponent( HeroFourComponent, {
			set: {
				template: ''
			}
		} ).createComponent( HeroFourComponent );
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
