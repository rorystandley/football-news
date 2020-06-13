import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule( {
	declarations: [
		HeaderComponent,
		FooterComponent,
		NavigationComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule
	],
	exports: [
		HeaderComponent,
		FooterComponent
	]
} )
export class SharedModule {
	constructor( private library: FaIconLibrary ) {
		library.addIcons( faFacebook, faTwitter, faInstagram );
	}
}
