import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import { Movie } from '../models/movie.model';
import { Category } from '../models';

@Injectable()
export class MyService {
	private readonly movies: Movie[];
	private readonly categories: Category[];
	private readonly delayTime = 2000;

	constructor() {
		this.movies = [
			{
				id: 1,
				categoryId: 1,
				language: 'Japanese',
				length: 107,
				RecordedYear: 2016,
				title: '君の名は',
				specialMention: {
					firstName: 'makoto',
					lastName: 'shinkai'
				}
			},
			{
				id: 4,
				categoryId: 1,
				language: 'Japanese',
				length: 130,
				RecordedYear: 2017,
				title: '打ち上げ花火',
				specialMention: {
					firstName: 'Nobuyuki',
					lastName: 'Takeuchi'
				}
			},
			{
				id: 5,
				categoryId: 1,
				language: 'Japanese',
				length: 130,
				RecordedYear: 2011,
				title: 'あの日',
				specialMention: {
					firstName: 'Tatsuyuki',
					lastName: 'Nagai'
				}
			},
			{
				id: 6,
				categoryId: 1,
				language: 'Japanese',
				length: 130,
				RecordedYear: 2010,
				title: 'エンジェルビーツ',
				specialMention: {
					firstName: 'Hiro',
					lastName: 'Maruyama'
				}
			},
			{
				id: 2,
				categoryId: 2,
				language: 'English',
				length: 92,
				RecordedYear: 1992,
				title: 'Wayne\'s world',
				specialMention: {
					firstName: 'Mike',
					lastName: 'Myers'
				}
			},
			{
				id: 7,
				categoryId: 2,
				language: 'English',
				length: 92,
				RecordedYear: 1996,
				title: 'Beavis & Butt-head do America',
				specialMention: {
					firstName: 'Mike',
					lastName: 'Judge'
				}
			}
			,
			{
				id: 8,
				categoryId: 2,
				language: 'English',
				length: 92,
				RecordedYear: 1999,
				title: 'Human traffic',
				specialMention: {
					firstName: 'John',
					lastName: 'Simm'
				}
			},
			{
				id: 9,
				categoryId: 2,
				language: 'English',
				length: 92,
				RecordedYear: 2012,
				title: 'Ted',
				specialMention: {
					firstName: 'Seth',
					lastName: 'MacFarlane'
				}
			},
			{
				id: 9,
				categoryId: 2,
				language: 'English',
				length: 92,
				RecordedYear: 2004,
				title: 'Harold & Kumar',
				specialMention: {
					firstName: 'John',
					lastName: 'Cho'
				}
			},
			{
				id: 10,
				categoryId: 2,
				language: 'English',
				length: 92,
				RecordedYear: 1998,
				title: 'The big lebowski',
				specialMention: {
					firstName: 'Steve',
					lastName: 'Buscemi'
				}
			},
			{
				id: 3,
				categoryId: 3,
				language: 'English',
				length: 107,
				RecordedYear: 2014,
				title: 'Whiplash',
				specialMention: {
					firstName: 'J.K.',
					lastName: 'Simmons'
				}
			},
			{
				id: 11,
				categoryId: 3,
				language: 'English',
				length: 107,
				RecordedYear: 2000,
				title: 'The Filth And The Fury',
				specialMention: {
					firstName: 'John',
					lastName: 'Lydon'
				}
			},
			{
				id: 12,
				categoryId: 3,
				language: 'English',
				length: 107,
				RecordedYear: 1980,
				title: 'The blues brothers',
				specialMention: {
					firstName: 'Dan',
					lastName: 'Aykroyd'
				}
			}
		];

		this.categories = [
			{ id: 1, title: 'Anime' },
			{ id: 2, title: 'wtf' },
			{ id: 3, title: 'Music' }
		];
	}

	getMovies(): Observable<Movie[]> {
		return Observable.of(this.movies).delay(this.delayTime);
	}

	getMoviesByCategoryId(categoryId: number): Observable<Movie[]> {
		// return Observable.throw("une erreur");
		return Observable.of(this.movies.reduce((datas, movie) => {
			if (movie.categoryId == categoryId) {
				datas.push(movie);
			}
			return datas;
		}, [])).delay(this.delayTime);
	}

	getCategories(): Observable<Category[]> {
		return Observable.of(this.categories).delay(this.delayTime);
	}
}
