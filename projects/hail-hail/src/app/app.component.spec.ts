import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe( 'AppComponent', () => {
	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		} );

		fixture = TestBed.overrideComponent( AppComponent, {
			set: {
				template: ''
			}
		} ).createComponent( AppComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();

	} ) );

	it( 'should be truthy', () => {
		expect( component ).toBeTruthy();
	} );
} );
