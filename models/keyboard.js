import Key from './key.js';

export default class Keyboard {
	constructor(layout) {
		this.layout = layout;
		this.keys = layout.layoutKeys.map(
			layoutKey => new Key({ layoutKey }),
		);
	}
}
