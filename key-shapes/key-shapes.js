import KeyShape from '../models/key-shape.js';

const keyXSpacing = 5;

const keyWidth = 30;
const keyHeight = 30;

const longKeyHeight = 52;

const redKeyWidth = 2*keyWidth + keyXSpacing;
const redKeyBaseHeight = 24;
const redKeyTopPadding = 9;

const finishDraw = (ctx, label, lineColor, backgroundColor) => {
	ctx.closePath();
	ctx.strokeStyle = lineColor;
	ctx.fillStyle = backgroundColor;
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = lineColor;
	ctx.fillText(label, 0, 0);
};

export const normal = new KeyShape({
	ax: - keyWidth*0.5,
	ay: - keyHeight*0.5,
	bx: keyWidth*0.5,
	by: keyHeight*0.5,
	draw: (ctx, label, lineColor, backgroundColor) => {
		ctx.beginPath();
		ctx.moveTo(- keyWidth*0.5, - keyHeight*0.5);
		ctx.lineTo(keyWidth*0.5, - keyHeight*0.5);
		ctx.lineTo(keyWidth*0.5, keyHeight*0.5);
		ctx.lineTo(- keyWidth*0.5, keyHeight*0.5);
		finishDraw(ctx, label, lineColor, backgroundColor);
	},
});

export const long = new KeyShape({
	ax: - keyWidth*0.5,
	ay: - longKeyHeight*0.5,
	bx: keyWidth*0.5,
	by: longKeyHeight*0.5,
	draw: (ctx, label, lineColor, backgroundColor) => {
		ctx.beginPath();
		ctx.moveTo(- keyWidth*0.5, - longKeyHeight*0.5);
		ctx.lineTo(keyWidth*0.5, - longKeyHeight*0.5);
		ctx.lineTo(keyWidth*0.5, longKeyHeight*0.5);
		ctx.lineTo(- keyWidth*0.5, longKeyHeight*0.5);
		finishDraw(ctx, label, lineColor, backgroundColor);
	},
});

export const red = new KeyShape({
	ax: - redKeyWidth*0.5,
	ay: - redKeyBaseHeight*0.5 - redKeyTopPadding,
	bx: redKeyWidth*0.5,
	by: redKeyBaseHeight*0.5,
	draw: (ctx, label, lineColor, backgroundColor) => {
		ctx.beginPath();
		ctx.moveTo(0, - redKeyBaseHeight*0.5 - redKeyTopPadding);
		ctx.lineTo(redKeyWidth*0.5, - redKeyBaseHeight*0.5);
		ctx.lineTo(redKeyWidth*0.5, redKeyBaseHeight*0.5);
		ctx.lineTo(- redKeyWidth*0.5, redKeyBaseHeight*0.5);
		ctx.lineTo(- redKeyWidth*0.5, - redKeyBaseHeight*0.5);
		finishDraw(ctx, label, lineColor, backgroundColor);
	},
});
