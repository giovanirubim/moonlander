const chr = (code) => String.fromCharCode(code);

const map = {
	'null': chr(0x2205),
	...Object.fromEntries(
		new Array(10).fill().map((_,i) => [i, i].map(x=>''+x)),
	),
	...Object.fromEntries(
		new Array(127 - 32).fill().map((_,i) => chr(i+32).repeat(2).split('')),
	),
	'Ç': 'Ç',
	'´': '´',
	'TAB': 'Tab',
	'CAPSLOCK': 'Caps',
	'LEFTSHIFT': 'Shift',
	'LEFTCTRL': 'Ctrl',
	'RIGHTCTRL': 'Ctrl',
	'LEFTMETA': chr(0x259e),
	'LEFTALT': 'Alt',
	'RIGHTALT': 'Alt',
	'SPACE': chr(0x02fd),
};

export default map;
