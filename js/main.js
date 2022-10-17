
const navbar = document.querySelector('.navbar');
function ToggleBurger() {
	if (!navbar.classList.contains('open')) {
		navbar.classList.add('open');
	} else {
		navbar.classList.remove('open');
	}
};

document.querySelector('.burger-toggle').addEventListener('click', ToggleBurger);

navbar.addEventListener('click', function (e) {
	if (e.target.classList == 'overlay') {
		navbar.classList.remove('open');
	}
});


//Accordion
let accordionCustom = document.querySelectorAll('.accordion-custom');

accordionCustom.forEach(function (el) {
	if (el.querySelector('.accordion-custom-header')) {
		el.querySelector('.accordion-custom-header').addEventListener('click', function () {
			el.classList.toggle('collapsed');

			if (el.classList.contains('collapsed')) {
				closeAccording(el);
			} else {
				openAccording(el);
			}
		});
	}
});

function accordionPreload() {
	accordionCustom.forEach(function (el) {
		if (el.classList.contains('collapsed')) {
			const elStyle = el.currentStyle || window.getComputedStyle(el);
			if (el.querySelector('.accordion-custom-header')) {
				const accordionHeader = el.querySelector('.accordion-custom-header');
				el.style.height = `${accordionHeader.offsetHeight + (parseInt(elStyle.paddingTop) * 2)}px`;
			}
		} else {
			openAccording(el);
		}
	});
}

function openAccording(element) {
	const bodyHeight = element.querySelector('.accordion-body').offsetHeight;
	const accordionHeader = element.querySelector('.accordion-custom-header');
	let elStyle = element.currentStyle || window.getComputedStyle(element);

	const accordionHeaderHeight = accordionHeader.offsetHeight + (parseInt(elStyle.paddingTop) * 2);
	element.style.height = `${bodyHeight + accordionHeaderHeight + (parseInt(elStyle.paddingTop) * 2)}px`;
}

function closeAccording(element) {
	const accordionHeader = element.querySelector('.accordion-custom-header');
	let elStyle = element.currentStyle || window.getComputedStyle(element);
	const accordionHeaderHeight = accordionHeader.offsetHeight + (parseInt(elStyle.paddingTop) * 2);

	element.style.height = `${accordionHeaderHeight}px`;
}

document.addEventListener('DOMContentLoaded', accordionPreload);
window.addEventListener('resize', accordionPreload);


//Tabs
function Tabs() {
	const tabsHead = document.querySelectorAll('[data-tab]');
	const tabContents = document.querySelectorAll('[id]');

	tabsHead.forEach(tab => {
		tab.addEventListener('click', () => {
			const target = document.querySelector('#' + tab.dataset.tab);
			tabContents.forEach(tabContent => {
				tabContent.classList.remove('active');
			})
			tabsHead.forEach(tab => {
				tab.classList.remove('active');
			})
			tab.classList.add('active');
			target.classList.add('active');
		})
	})
}
const connectTabs = new Tabs();


//LoadImgPrew

// function isFileImage(file) {
// 	return file && file['type'].split('/')[0] === 'image';
// }

// function loadFiles(e) {
// 	const output = document.querySelector('.file-output');

// 	if (e.target.files) {
// 		for (let i = 0; i < e.target.files.length; i++) {
// 			if (isFileImage(e.target.files[i])) {
// 				console.log(e.target.files[i]);
// 				output.innerHTML = `${e.target.files[i].name}`;
// 			}
// 		}
// 	}
// };

// document.querySelector('.group.file input').addEventListener('change', loadFiles);


var swiper = new Swiper(".coverflow", {
	effect: "coverflow",
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	initialSlide: 1,
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			initialSlide: 0,
			slidesPerView: 1,
		},
		767.98: {
			coverflowEffect: {
				rotate: 38,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}
		},
		991.98: {
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 200,
				modifier: 1,
				slideShadows: true,
			}
		},
	}
});