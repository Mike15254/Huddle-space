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
		background-image: linear-gradient(rgba(50, 83, 67, 0.85), rgb(51 83 67 / 85%)),
			url(./gatYou2.jpeg);
		width: 100%;
		height: 100vh;
	}
</style>
