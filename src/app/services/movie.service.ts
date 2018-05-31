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
				id: 1,
				categoryId: 1,
				language: 'Japanese',
				length: 107,
				RecordedYear: 2016,
				title: '君の名は',
				actors: [{
					id: 1,
					firstName: 'moi',
					lastName: 'toi'
				}]
			},
			{
				id: 2,
				categoryId: 1,
				language: 'English',
				length: 92,
				RecordedYear: 1992,
				title: 'Wayne\'s world',
				actors: [{
					id: 1,
					firstName: 'moi',
					lastName: 'toi'
				}]
			},
			{
				id: 3,
				categoryId: 2,
				language: 'English',
				length: 107,
				RecordedYear: 2014,
				title: 'Whiplash',
				actors: [{
					id: 1,
					firstName: 'moi',
					lastName: 'toi'
				}]
			}
		]).delay(2000);
	}
}
