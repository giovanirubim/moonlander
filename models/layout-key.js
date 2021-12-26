export default class LayoutKey {
	constructor({ x, y, shape, rotation = 0 }) {
		this.x = x;
		this.y = y;
		this.shape = shape;
		this.rotation = rotation;
	}
	rotateAround(x, y, rotation) {
		const dx = this.x - x;
		const dy = this.y - y;
		const cos = Math.cos(rotation);
		const sin = Math.sin(rotation);
		this.x = x + dx*cos - dy*sin;
		this.y = y + dx*sin + dy*cos;
		this.rotation += rotation;
		return this;
	}
	draw(ctx, label, lineColor, bgColor) {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotation);
		this.shape.draw(ctx, label, lineColor, bgColor);
		ctx.restore();
	}
}
