import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article/article.service';
import { HeroFourComponent } from './components/hero-four/hero-four.component';

@NgModule( {
	declarations: [
		HeroFourComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		ArticleService
	],
	exports: [
		HeroFourComponent
	]
} )
export class ArticlesModule {
}
