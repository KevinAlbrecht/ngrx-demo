import { Component, OnInit } from '@angular/core';
import { ElementsState, getAllMovies, getMoviesState } from './store/reducers/reducer';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';
import { GetMovieAction } from './store/actions/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  movies$: Observable<MoviesState>;

  constructor(private store: Store<ElementsState>) {}

  ngOnInit() {
    this.movies$ = this.store.select<MoviesState>(getMoviesState);
    this.store.dispatch(new GetMovieAction());
  }
}
