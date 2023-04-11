<script>
	import img from '$lib/image/wave.svg';
</script>

<div class="container">
	<div class="herosection">
		<img src={img} alt="svg" />
	</div>

	<slot />
</div>

<style>
	.container {
		background-size: cover;
		background-image: linear-gradient(rgba(8, 8, 8, 0.85), rgba(6, 7, 7, 0.85)),
			url(./gatYou2.jpeg);
		width: 100%;
		height: 100vh;
	}
	.herosection {
		height: 20%;
	}
</style>
