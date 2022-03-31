import anime from 'animejs/lib/anime';

// ========================================================================================================================================================

// Title animation
let letterAnimation = document.querySelector('.letterAnimation');
if (letterAnimation) {
	letterAnimation.innerHTML = letterAnimation.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({ loop: false })
		.add({
			targets: '.letterAnimation .letter',
			translateY: [40, 0],
			opacity: [0, 1],
			duration: 1200,
			delay: (el, i) => 500 + 30 * i,
		});
}

// Text animation
let textAnimation = document.querySelector('.textAnimation');
if (textAnimation) {
	anime({
		targets: textAnimation,
		translateX: [-40, 0],
		opacity: [0, 1],
		delay: 1800,
		duration: 2000,
	});
}

function offset(el) {
	let rect = el.getBoundingClientRect();
	let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
	let scrollTop = window.scrollY || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

// Header scroll && Scroll items
let $animateItems = document.querySelectorAll('.animateItems');

function scrollOnscroll() {
	let srcValue = window.scrollY;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (srcValue > 10) {
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}
	}
	if ($animateItems.length) {
		$animateItems.forEach(el => {
			let scrItem = el;
			let scrItemOffset = offset(scrItem).top;
			let scrItemHeight = scrItem.offsetHeight;

			let scrItemPoint = window.innerHeight - (window.innerHeight - scrItemHeight) / 1.5;
			if (window.innerHeight > scrItemHeight) {
				scrItemPoint = window.innerHeight - scrItemHeight / 1.5;
			}

			if ((srcValue > scrItemOffset - scrItemPoint) && srcValue < (scrItemOffset + scrItemHeight)) {
				scrItem.classList.add('animateItemsActive');
			}
		});
	}
}

setTimeout(() => {
	document.addEventListener('DOMContentLoaded', scrollOnscroll);
	scrollOnscroll();
}, 100);

window.addEventListener('scroll', scrollOnscroll);
