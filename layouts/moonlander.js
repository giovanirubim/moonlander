import PhysicalLayout from '../models/physical-layout.js';
import { normal, long, red } from '../key-shapes/key-shapes.js';
import { tiltedRectangleHeight } from '../math/math.js';

const moonlander = new PhysicalLayout({ name: 'moonlander' });

const xSpacing = 5;
const ySpacing = 5;
const xStride = normal.width + xSpacing;
const yStride = normal.height + ySpacing;
const midSpacing = 178;
const downShift = 4;
const mainClusterWidth = normal.width*14 + xSpacing*12 + midSpacing;
const mainClusterHeight = normal.height*5 + ySpacing*4 + downShift*3;
const thumbClusterWidth = long.width*3 + xSpacing*2;
const thumbClusterHeigth = long.height + ySpacing + red.height;
const thumbClusterOffsetX = (thumbClusterWidth + midSpacing)*0.5 - 71;
const thumbClusterOffsetY = 114;
const thumbClusterTilt = 30/180*Math.PI;
const thumbClusterTiltedHeight = tiltedRectangleHeight(
	thumbClusterWidth,
	thumbClusterHeigth,
	thumbClusterTilt,
);
const moonlanderHeight = mainClusterHeight*0.5 + thumbClusterOffsetY + thumbClusterTiltedHeight*0.5;
const thumbClusterCenterX = thumbClusterOffsetX;
const thumbClusterCenterY = thumbClusterOffsetY - (moonlanderHeight - mainClusterHeight)*0.5;

const addMainClusterKey = (i) => {
	let right, row, col;
	if (i < 42) {
		right = (i%14 >= 7)|0;
		row = i/14|0;
		col = i%7;
	} else if (i < 54) {
		const local = i - 42;
		right = (local >= 6)|0;
		row = 3;
		col = local%6 + right;
	} else {
		const local = i - 54;
		right = (local >= 5)|0;
		row = 4;
		col = local%5 + right*2;
	}
	moonlander.addKey({
		x: (- mainClusterWidth*0.5
			+ normal.width*0.5
			+ col*xStride
			+ right*(xStride*7 - xSpacing + midSpacing)
		),
		y: (- moonlanderHeight*0.5
			+ normal.height*0.5
			+ row*yStride
			+ downShift*Math.abs(col - 3)
		),
		shape: normal,
	});
};

const addThumbClusterKey = (i) => {
	const local = i - 64;
	const col = local % 4;
	const right = (local >= 4)|0;
	const row = (col !== 0)|0;
	const shape = [ red, long ][row];
	const sign = (2*right - 1);
	const cx = sign*thumbClusterCenterX;
	const cy = thumbClusterCenterY;
	moonlander.addKey({
		x: (
			+ cx
			- thumbClusterWidth*0.5
			+ row*((col - 1)*(long.width + xSpacing) + long.width*0.5)
			+ (1 - row)*(
				+ red.width*0.5
				+ right*(thumbClusterWidth - red.width)
			)
		),
		y: (
			+ cy
			- thumbClusterHeigth*0.5
			+ row*(red.height + ySpacing + long.height*0.5)
			- (1 - row)*red.ay
		),
		shape,
	}).rotateAround(cx, cy, - sign*thumbClusterTilt);
};

for (let i=0; i<72; ++i) {
	if (i < 64) {
		addMainClusterKey(i);
	} else {
		addThumbClusterKey(i);
	}
}

export default moonlander;
