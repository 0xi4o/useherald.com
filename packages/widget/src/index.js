import { h, render } from 'preact';
import Widget from './widget';
import './global.css';

export function init(id, wrapper = '#heraldWidget') {
	const renderElement = document.querySelector(wrapper)
		? document.querySelector(wrapper)
		: document.querySelector('body');
	const heraldPopup = document.createElement('div');
	heraldPopup.setAttribute('id', 'heraldPopup');
	document.body.appendChild(heraldPopup);

	render(h(Widget, { id }), renderElement);
}

window.init = init;
