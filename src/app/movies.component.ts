import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { ElementsState, getAllMovies, getMoviesState } from './store/reducers/reducer';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/Observable';
import { Movie } from './models/movie.model';
import { GetMovieAction } from './store/actions/action';

@Component({
  selector: 'app-movies',
  template: `<ul>
                <li *ngFor="let movie of movies">{{movie.title}}</li>
            </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent {

  @Input()
  movies: Movie[];

  constructor() {
  }
}
