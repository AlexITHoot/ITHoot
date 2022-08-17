
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


document.addEventListener('alpine:init', () => {
	Alpine.store('darkMode', {
		init() {
			this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
		},

		on: false,

		toggle() {
			this.on = !this.on
		}
	})
})
