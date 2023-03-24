<script>
	let loading = true;
	const animationDuration = 3000;

	setTimeout(() => {
		loading = false;
	}, animationDuration);
</script>

<div class="loader" style="display: {loading ? 'block' : 'none'}">
	<h1>Loading</h1>
	<span />
	<span />
	<span />
</div>
<div class="greeting" style="display: {loading ? 'none' : 'block'}">
	
</div>

<style>
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
</style>
