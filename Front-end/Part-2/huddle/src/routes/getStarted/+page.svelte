<script>
	// for the loading animation before the from
	let loading = true;
	const animationDuration = 3000;

	setTimeout(() => {
		loading = false;
	}, animationDuration);

	// the form functionality

	import { onMount } from 'svelte';

	let circles = [];

	onMount(() => {
		circles = [...document.querySelectorAll('circle')];
		update();
	});

	let currentActive = 1;

	const handleNextClick = () => {
		currentActive++;

		if (currentActive > circles.length) {
			currentActive = circles.length;
		}
		console.log(currentActive);
		update();
	};

	const handlePrevClick = () => {
		currentActive--;

		if (currentActive < 1) {
			currentActive = 1;
		}
		update();
	};

	const update = () => {
		circles.forEach((circle, idx) => {
			if (idx < currentActive) {
				circle.classList.add('active');
			} else {
				circle.classList.remove('active');
			}
		});

		const actives = document.querySelectorAll('.active');
		const progress = document.getElementById('progress');

		progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

		if (currentActive === 1) {
			prev.disabled = false;
		} else if (currentActive === circles.length) {
			next.disabled = false;
		} else {
			prev.disabled = false;
			next.disabled = false;
		}
	};
</script>

<div class="loader" style="display: {loading ? 'block' : 'none'}">
	<h1>LOADING</h1>
	<span />
	<span />
	<span />
</div>

<div class="greeting" style="display: {loading ? 'none' : 'block'}">
	<div class="container">
		<h1>Welcome here</h1>
		<div class="progress-container">
			<div class="progress" id="progress" />
			<div class="circle active">1</div>
			<div class="circle">2</div>
			<div class="circle">3</div>
			<div class="circle">4</div>
		</div>

		<button class="btn" id="prev" on:click={handlePrevClick}>Prev</button>
		<button class="btn" id="next" on:click={handleNextClick}>Next</button>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	:root {
		--line-border-fill: #18b997;
		--line-border-empty: #bdbdbd;
	}
	.loader {
		margin: 200px auto;
	}
	h1 {
		font-family: 'Actor', sans-serif;
		color: #000000;
		font-size: 16px;
		letter-spacing: 1px;
		font-weight: 200;
		text-align: center;
	}
	.loader span {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		display: inline-block;
		position: absolute;
		left: 50%;
		margin-left: -10px;
		animation: 3s infinite linear;
	}

	.loader span:nth-child(2) {
		background: #e84c3d;
		animation: kiri 1.2s infinite linear;
	}
	.loader span:nth-child(3) {
		background: #f1c40f;
		z-index: 100;
	}
	.loader span:nth-child(4) {
		background: #2fcc71;
		animation: kanan 1.2s infinite linear;
	}

	@keyframes kanan {
		0% {
			-webkit-transform: translateX(20px);
		}

		50% {
			-webkit-transform: translateX(-20px);
		}

		100% {
			-webkit-transform: translateX(20px);
			z-index: 200;
		}
	}

	@keyframes kiri {
		0% {
			-webkit-transform: translateX(-20px);
			z-index: 200;
		}
		50% {
			-webkit-transform: translateX(20px);
		}
		100% {
			-webkit-transform: translateX(-20px);
		}
	}

	h1 {
		color: #212121;
		margin-bottom: 90px;
	}

	.container {
		text-align: center;
	}

	.progress-container {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-bottom: 30px;
		max-width: 100%;
		width: 350px;
	}

	.progress-container::before {
		content: '';
		background-color: var(--line-border-empty);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 100%;
		z-index: -1;
		transform: 0.4s ease;
	}

	.progress {
		display: flex;
		background-color: var(--line-border-fill);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 0%;
		z-index: -1;
		transform: 0.4s ease;
	}

	.circle {
		background-color: #ffffff;
		color: #999;
		border-radius: 50%;
		height: 50px;
		width: 50px;
		border: 3px solid #b2bec3;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.4s ease;
	}

	.circle.active {
		border-color: var(--line-border-fill);
	}

	.btn {
		background-color: var(--line-border-fill);
		color: #ffffff;
		border-radius: 6px;
		border: 0;
		cursor: pointer;
		padding: 8px 30px;
		margin: 5px;
		font-size: 14px;
	}

	.btn:focus {
		outline: 0;
	}

	.btn:active {
		transform: scale(0.97);
	}

	.btn:disabled {
		background-color: var(--line-border-empty);
		cursor: not-allowed;
	}
</style>
