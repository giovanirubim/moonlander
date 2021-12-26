export const tiltedRectangleHeight = (width, height, tilt) => {
	const ax = -width*0.5;
	const bx = +width*0.5;
	const ay = height*0.5;
	const by = height*0.5;
	const sin = Math.sin(tilt);
	const cos = Math.cos(tilt);
	const y1 = ax*sin + ay*cos;
	const y2 = bx*sin + by*cos;
	return Math.max(Math.abs(y1), Math.abs(y2))*2;
};
