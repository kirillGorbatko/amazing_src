// ------------------- imports
import { documentReady, pageLoad } from 'utils';
import { menuInit } from 'components/functions';
import * as scroll from 'components/scroll';
// ------------------- imports###

// ------------------  import components
// ------------------  import components###

// -------------------  global variables

const readyFunc = () => {
	menuInit();
};

const loadFunc = () => {
	document.documentElement.classList.add('pageLoaded');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
