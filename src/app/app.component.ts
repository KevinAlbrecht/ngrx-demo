import { Component, OnInit } from '@angular/core';
import { ElementsState, getAllMovies, getMoviesState, getSelectedMoviesState } from './store/reducers/reducer';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';
import { GetMovieAction } from './store/actions/action';
import { RouterState } from '@angular/router';
import { getRouterState } from './router-store/router.state';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor() { }
}
