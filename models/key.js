import symbols from '../symbols.js';

export default class Key {
	constructor({ layoutKey, code, heat = 0 }) {
		this.layoutKey = layoutKey;
		this.code = code;
		this.heat = heat;
	}
	draw(ctx, lineColor, bgColor) {
		this.layoutKey.draw(
			ctx,
			symbols[this.code],
			lineColor,
			bgColor,
		);
	}
}
