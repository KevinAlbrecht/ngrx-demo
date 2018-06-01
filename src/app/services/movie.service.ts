import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Movie } from '../models/movie.model';
import { Category } from '../models';

@Injectable()
export class MyService {
	private readonly movies: Movie[];
	private readonly categories: Category[];

	constructor() {
		this.movies = [
			{
				id: 1,
				categoryId: 1,
				language: 'Japanese',
				length: 107,
				RecordedYear: 2016,
				title: '君の名は',
				actors: [{
					id: 1,
					firstName: 'makoto',
					lastName: 'shinkai'
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
					firstName: 'Mike',
					lastName: 'Myers'
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
					firstName: 'J.K.',
					lastName: 'Simmons'
				}]
			}
		];

		this.categories = [
			{ id: 1, title: 'Anime' },
			{ id: 2, title: 'wtf' },
			{ id: 3, title: 'Music' }
		];
	}

	getMovies(): Observable<Movie[]> {
		return Observable.of(this.movies).delay(2000);
	}

	getMoviesByCategoryId(categoryId: number): Observable<Movie[]> {
		return Observable.of(this.movies.reduce((datas, movie) => {
			if (movie.categoryId === categoryId) {
				datas.push(movie);
			}
			return datas;
		}, [])).delay(2000);
	}

	getCategories(): Observable<Category[]> {
		return Observable.of(this.categories).delay(2000);
	}
}
