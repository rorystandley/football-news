import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleService } from '@feature-modules/articles/services/article/article.service';
import { MockArticleService } from '@mocks';
import { TwoUpThreeDownComponent } from '@feature-modules/articles/components/two-up-three-down/two-up-three-down.component';

describe( 'TwoUpThreeDownComponent', () => {
	let component: TwoUpThreeDownComponent;
	let fixture: ComponentFixture<TwoUpThreeDownComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ TwoUpThreeDownComponent ],
			providers: [
				{ provide: ArticleService, useClass: MockArticleService }
			]
		} );

		fixture = TestBed.overrideComponent( TwoUpThreeDownComponent, {
			set: {
				template: ''
			}
		} ).createComponent( TwoUpThreeDownComponent );
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
