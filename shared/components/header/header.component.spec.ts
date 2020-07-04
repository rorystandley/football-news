import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe( 'HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			imports: [],
			declarations: [ HeaderComponent ],
			providers: []
		} );

		fixture = TestBed.overrideComponent( HeaderComponent, {
			set: {
				template: ''
			}
		} ).createComponent( HeaderComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} ) );


	it( 'should create', () => {
		expect( component ).toBeTruthy();
	} );
} );
