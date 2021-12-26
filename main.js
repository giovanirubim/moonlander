import * as KeyboardRenderer from './keyboard-renderer.js';
import moonlander from './layouts/moonlander.js';
import Keyboard from './models/keyboard.js';

const canvas = document.querySelector('canvas');
const keyboard = new Keyboard(moonlander);

KeyboardRenderer.start(canvas, 800, 400);
KeyboardRenderer.setKeyboard(keyboard);
