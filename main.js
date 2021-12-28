import * as KeyboardRenderer from './keyboard-renderer.js';
import moonlander from './layouts/moonlander.js';
import Keyboard from './models/keyboard.js';
import qwerty from './key-mappings/qwerty.js';

const canvas = document.querySelector('canvas');
const keyboard = new Keyboard({
	layout: moonlander,
	keyMapping: qwerty,
});

KeyboardRenderer.start(canvas, 1200, 600);
KeyboardRenderer.setKeyboard(keyboard);
