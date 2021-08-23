import { h, render } from 'preact';
import Herald from './herald';
import Widget from './widget';
import './global.css';

function init(id, wrapper = '#heraldWidget') {
	const renderElement = document.querySelector(wrapper)
		? document.querySelector(wrapper)
		: document.querySelector('body');
	const heraldPopup = document.createElement('div');
	heraldPopup.setAttribute('id', 'heraldPopup');
	document.body.appendChild(heraldPopup);

	render(h(Widget, { id }), renderElement);
}

export { Herald, init };

window.init = init;
