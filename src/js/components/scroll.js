import anime from 'animejs/lib/anime';

// ========================================================================================================================================================

// Title animation
let textWrapper = document.querySelector('.letterAnimation');
if (textWrapper) {
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({ loop: false })
		.add({
			targets: '.letterAnimation .letter',
			translateY: [40, 0],
			translateZ: 0,
			opacity: [0, 1],
			easing: 'easeOutExpo',
			duration: 1200,
			delay: (el, i) => 500 + 30 * i,
		});
}

function offset(el) {
	let rect = el.getBoundingClientRect();
	let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
	let scrollTop = window.scrollY || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

// Header scroll && Scroll items
let scrItems = document.querySelectorAll('[data-scr]');

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
	if (scrItems.length > 0) {
		for (let index = 0; index < scrItems.length; index += 1) {
			let scrItem = scrItems[index];
			let scrItemOffset = offset(scrItem).top;
			let scrItemHeight = scrItem.offsetHeight;

			let scrItemPoint = window.innerHeight - (window.innerHeight - scrItemHeight) / 1.5;
			if (window.innerHeight > scrItemHeight) {
				scrItemPoint = window.innerHeight - scrItemHeight / 1.5;
			}

			if ((srcValue > scrItemOffset - scrItemPoint) && srcValue < (scrItemOffset + scrItemHeight)) {
				scrItem.classList.add('_active');
			}
		}
	}
}

setTimeout(() => {
	document.addEventListener('DOMContentLoaded', scrollOnscroll);
	scrollOnscroll();
}, 100);

window.addEventListener('scroll', scrollOnscroll);
