import Key from './key.js';

export default class Keyboard {
	constructor({ layout, keyMapping = [] }) {
		this.layout = layout;
		this.keys = layout.layoutKeys.map(
			layoutKey => new Key({ layoutKey }),
		);
		this.setKeyMapping(keyMapping);
	}
	setKeyMapping(keyMapping) {
		const { keys } = this;
		for (let i=0; i<keys.length; ++i) {
			keys[i].code = keyMapping[i] ?? null;
		}
	}
}
