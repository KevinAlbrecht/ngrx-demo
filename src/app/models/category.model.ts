import { IndexableEntity } from '.';

export class Category implements IndexableEntity {
	id: number;
	title: string;
	emoji: string;
	emojiStyle: string;
}
