import { IndexableEntity } from '.';

export class DictionaryUtils {

	public static toDictionnary<T extends IndexableEntity>(movies: T[]): { [id: string]: T } {
		return movies.reduce((entities: { [id: string]: T }, movie: T) => {
			return {
				...entities,
				[movie.id]: movie
			};
		},
			{}
		);
	}

	public static toArray<T>(entities: { [id: string]: T }): T[] {
		return Object.keys(entities).map(id => entities[id]);
	}
}
