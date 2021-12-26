export default class Key {
	constructor({ layoutKey, code, heat = 0, label = 0 }) {
		this.layoutKey = layoutKey;
		this.code = code;
		this.heat = heat;
		this.label = label;
	}
	draw(ctx, lineColor, bgColor) {
		this.layoutKey.draw(
			ctx,
			this.label,
			lineColor,
			bgColor,
		);
	}
}
