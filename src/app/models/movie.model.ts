import { Actor, IndexableEntity } from './index';

export class Movie implements IndexableEntity {
	id: number;
	categoryId: number;
	title: string;
	language: string;
	RecordedYear: number;
	length: number;
	actors: Actor[];
}
