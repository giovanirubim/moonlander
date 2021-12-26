import LayoutKey from './layout-key.js';

export default class PhysicalLayout {
	constructor({ name }) {
		this.name = name;
		this.layoutKeys = [];
		this.ax = Infinity;
		this.ay = Infinity;
		this.bx = -Infinity;
		this.by = -Infinity;
	}
	addKey({ x, y, shape }) {
		const key = new LayoutKey({ x, y, shape });
		this.ax = Math.min(this.ax, key.shape.ax);
		this.ay = Math.min(this.ay, key.shape.ay);
		this.bx = Math.max(this.bx, key.shape.bx);
		this.by = Math.max(this.by, key.shape.by);
		this.layoutKeys.push(key);
		return key;
	}
	get width() { return this.bx - this.ax; }
	get height() { return this.by - this.ay; }
}
