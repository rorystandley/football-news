import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article/article.service';
import { ArticlesFourGridComponent } from './components/articles-four-grid/articles-four-grid.component';


@NgModule( {
	declarations: [
		ArticlesFourGridComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		ArticleService
	],
	exports: [
		ArticlesFourGridComponent
	]
} )
export class ArticlesModule {
}
