import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ArticlesModule } from '@feature-modules/articles/articles.module';

@NgModule( {
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		ArticlesModule
	]
} )
export class HomeModule {
}
