import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {
  constructor() { }

  getMovies(): Observable<Movie[]> {
    return Observable.of([
      {
        language: 'Japanese',
        length: 107,
        RecordedYear: 2016,
        title: '君の名は'
      },
      {
        language: 'English',
        length: 92,
        RecordedYear: 1992,
        title: "Wayne's world"
      },
      {
        language: 'English',
        length: 107,
        RecordedYear: 2014,
        title: 'Whiplash'
      }
    ]).delay(2000);
  }
}
