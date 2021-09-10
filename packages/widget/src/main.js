import { h, render } from 'preact';
// import Herald from './herald';
import App from './app';
import './index.css';

function init(id, wrapper = '#heraldWidget') {
	const renderElement = document.querySelector(wrapper)
		? document.querySelector(wrapper)
		: document.querySelector('body');
	const heraldPopup = document.createElement('div');
	heraldPopup.setAttribute('id', 'heraldPopup');
	document.body.appendChild(heraldPopup);

	render(h(App, { id }), renderElement);
}

export { init };

window.init = init;
