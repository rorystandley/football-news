import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article/article.service';
import { HeroFourComponent } from './components/hero-four/hero-four.component';
import { TwoUpThreeDownComponent } from './components/two-up-three-down/two-up-three-down.component';

@NgModule( {
	declarations: [
		HeroFourComponent,
		TwoUpThreeDownComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		ArticleService
	],
	exports: [
		HeroFourComponent,
		TwoUpThreeDownComponent
	]
} )
export class ArticlesModule {
}
