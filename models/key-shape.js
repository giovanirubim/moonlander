export default class KeyShape {
	constructor({ ax, ay, bx, by, draw }) {
		this.draw = draw;
		this.width = bx - ax;
		this.height = by - ay;
		this.ax = ax;
		this.ay = ay;
		this.bx = bx;
		this.by = by;
	}
}
