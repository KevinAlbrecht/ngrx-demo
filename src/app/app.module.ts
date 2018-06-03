import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects/';
import { MyService } from './services/my.service';
import { MoviesListComponent } from './components/movies-list.component';
import { routerReducers } from './router-store/router.state';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './router-store/custom-router-state.serializer';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies.component';
import { CategoriesComponent } from './components/categories.component';
import { reducers } from './store/reducers';
import { effects } from './store/effects/effect';
import { RouterEffect } from './router-store/router.effect';

const routes: Routes = [
	{ path: '', component: CategoriesComponent, pathMatch: 'full' },
	{ path: 'category/:categoryId', component: MoviesComponent, pathMatch: 'full' },
];

@NgModule({
	declarations: [
		AppComponent,
		MoviesListComponent,
		MoviesComponent,
		CategoriesComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		StoreModule.forRoot({}),
		StoreModule.forFeature('elements', reducers),
		StoreModule.forFeature('router', routerReducers),
		EffectsModule.forRoot([RouterEffect]),
		EffectsModule.forFeature(effects),
		StoreRouterConnectingModule
	],
	providers: [
		...effects,
		MyService,
		{
			provide: RouterStateSerializer,
			useClass: CustomRouterStateSerializer
		}],
	bootstrap: [AppComponent]
})
export class AppModule { }
