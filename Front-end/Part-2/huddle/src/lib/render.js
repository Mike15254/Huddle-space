const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cirlces = [...document.querySelectorAll('.circle')];

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;

	if (currentActive > cirlces.length) {
		currentActive = cirlces.length;
	}
	console.log(currentActive);
	update();
});

prev.addEventListener('click', () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}
	update();
});

function update() {
	cirlces.forEach((cirlce, idx) => {
		if (idx < currentActive) {
			cirlce.classList.add('active');
		} else {
			cirlce.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	progress.style.width = ((actives.length - 1) / (cirlces.length - 1)) * 100 + '%';

	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === cirlces.length) {
		prev.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
