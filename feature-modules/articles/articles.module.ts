import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFourComponent } from './components/hero-four/hero-four.component';
import { TwoUpThreeDownComponent } from './components/two-up-three-down/two-up-three-down.component';
import { HeroTwoComponent } from './components/hero-two/hero-two.component';

@NgModule( {
	declarations: [
		HeroFourComponent,
		TwoUpThreeDownComponent,
		HeroTwoComponent
	],
	imports: [
		CommonModule
	],
	providers: [],
	exports: [
		HeroFourComponent,
		TwoUpThreeDownComponent
	]
} )
export class ArticlesModule {
}
