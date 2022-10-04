
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

// import { S as E, P as $ } from "./vendor.js";
// const M = function () {
// 	const s = document.createElement("link").relList;
// 	if (s && s.supports && s.supports("modulepreload")) return;
// 	for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
// 	new MutationObserver((e) => {
// 		for (const a of e) if (a.type === "childList") for (const n of a.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && r(n);
// 	}).observe(document, { childList: !0, subtree: !0 });
// 	function o(e) {
// 		const a = {};
// 		return (
// 			e.integrity && (a.integrity = e.integrity),
// 			e.referrerpolicy && (a.referrerPolicy = e.referrerpolicy),
// 			e.crossorigin === "use-credentials" ? (a.credentials = "include") : e.crossorigin === "anonymous" ? (a.credentials = "omit") : (a.credentials = "same-origin"),
// 			a
// 		);
// 	}
// 	function r(e) {
// 		if (e.ep) return;
// 		e.ep = !0;
// 		const a = o(e);
// 		fetch(e.href, a);
// 	}
// };
// M();
// function S({ swiper: t, extendParams: s, on: o }) {
// 	s({ panoramaEffect: { depth: 200, rotate: 30 } }),
// 		o("beforeInit", () => {
// 			if (t.params.effect !== "panorama") return;
// 			t.classNames.push(`${t.params.containerModifierClass}panorama`), t.classNames.push(`${t.params.containerModifierClass}3d`);
// 			const r = { watchSlidesProgress: !0 };
// 			Object.assign(t.params, r), Object.assign(t.originalParams, r);
// 		}),
// 		o("progress", () => {
// 			if (t.params.effect !== "panorama") return;
// 			const r = t.slidesSizesGrid,
// 				{ depth: e = 200, rotate: a = 30 } = t.params.panoramaEffect,
// 				g = (a * Math.PI) / 180 / 2,
// 				h = 1 / (180 / a);
// 			for (let i = 0; i < t.slides.length; i += 1) {
// 				const c = t.slides[i],
// 					P = c.progress,
// 					d = r[i],
// 					y = t.params.centeredSlides ? 0 : (t.params.slidesPerView - 1) * 0.5,
// 					l = P + y,
// 					f = 1 - Math.cos(l * h * Math.PI),
// 					m = `${l * (d / 3) * f}px`,
// 					p = l * a,
// 					u = `${((d * 0.5) / Math.sin(g)) * f - e}px`;
// 				c.style.transform = t.params.direction === "horizontal" ? `translateX(${m}) translateZ(${u}) rotateY(${p}deg)` : `translateY(${m}) translateZ(${u}) rotateX(${-p}deg)`;
// 			}
// 		}),
// 		o("setTransition", (r, e) => {
// 			t.params.effect === "panorama" &&
// 				t.slides.forEach((a) => {
// 					a.style.transition = `${e}ms`;
// 				});
// 		});
// }
// new E(".panorama-slider .swiper", {
// 	modules: [$, S],
// 	effect: "panorama",
// 	loop: !0,
// 	loopedSlides: 10,
// 	centeredSlides: !0,
// 	slidesPerView: 2,
// 	panoramaEffect: { rotate: 40, depth: 150 },
// 	grabCursor: !0,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	// breakpoints: {
// 	// 	480: { slidesPerView: 2, panoramaEffect: { rotate: 35, depth: 150 } },
// 	// 	640: { slidesPerView: 3, panoramaEffect: { rotate: 30, depth: 150 } },
// 	// 	1024: { slidesPerView: 4, panoramaEffect: { rotate: 30, depth: 200 } },
// 	// 	1200: { slidesPerView: 5, panoramaEffect: { rotate: 25, depth: 250 } },
// 	// },
// });

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