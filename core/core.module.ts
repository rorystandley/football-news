import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule( {
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
	exports: []
} )
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
		if ( parentModule ) {
			throw new Error(
				'Core is already loaded. Import it in the AppModule only'
			);
		}
	}
}
