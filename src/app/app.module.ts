import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/movies.reducer';
import { reducers } from './store/reducers/reducer';
import { EffectsModule } from '@ngrx/effects/';
import { effects, MovieEffect } from './store/effects/effect';
import { MovieService } from './services/movie.service';
import { MoviesListComponent } from './movies-list.component';
import { routerReducers } from './router-store/router.state';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './router-store/custom-router-state.serializer';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';
import { LinkComponent } from './link.component';
import { MoviesComponent } from './movies.component';
import { CategoriesComponent } from './categories.component';
import { ErrorComponent } from './error.component';

const routes: Routes = [
	{ path: '', component: CategoriesComponent, pathMatch: 'full' },
	{ path: 'categorie/:categorieId', component: MoviesComponent, pathMatch: 'full' },
	{ path: ':movieId', component: MovieComponent },
	{ path: 'error', component: ErrorComponent, pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		MoviesListComponent,
		MoviesComponent,
		MovieComponent,
		LinkComponent,
		CategoriesComponent,
		ErrorComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		StoreModule.forRoot({}),
		StoreModule.forFeature('elements', reducers),
		StoreModule.forFeature('router', routerReducers),
		EffectsModule.forRoot([]),
		EffectsModule.forFeature(effects),
		StoreRouterConnectingModule
	],
	providers: [
		MovieEffect,
		MovieService,
		{
			provide: RouterStateSerializer,
			useClass: CustomRouterStateSerializer
		}],
	bootstrap: [AppComponent]
})
export class AppModule { }
