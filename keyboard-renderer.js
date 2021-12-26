let dom, ctx, canvasWidth, canvasHeight;
let scale = 1;
let currentKeyboard;

const lineWidth = 1;
const lineColor = 'rgba(0, 192, 255, 1)';
const bgColor = 'rgba(0, 127, 255, 0.2)';

const clear = () => {
	ctx.fillStyle = '#111';
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
};

const render = () => {

	ctx.setTransform(1, 0, 0, 1, 0, 0);
	clear();

	ctx.setTransform(
		scale, 0,
		0, scale,
		canvasWidth*0.5, canvasHeight*0.5,
	);

	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.lineWidth = lineWidth;
	ctx.lineJoin = 'round';

	currentKeyboard.keys.forEach(key => key.draw(ctx, lineColor, bgColor));
};

const frame = () => {
	render();
	requestAnimationFrame(frame);
};

export const resize = (newWidth, newHeight) => {
	dom.width = canvasWidth = newWidth;
	dom.height = canvasHeight = newHeight;
};

export const start = (canvas, width = canvas.width, height = canvas.height) => {
	dom = canvas;
	resize(width, height);
	ctx = dom.getContext('2d');
	requestAnimationFrame(frame);
};

export const setKeyboard = (keyboard) => {
	currentKeyboard = keyboard;
};
