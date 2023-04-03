<script>
	import img from '$lib/image/wave.svg';
	// for the loading animation before the from
	import QuestionareForm from '$lib/components/questionareForm.svelte';
	import Animate from '$lib/components/loadingAnime.svelte';
</script>

<div class="herosection">
	<img src={img} alt="svg" />
</div>
<Animate />
<div>
	<QuestionareForm />
</div>
<div>
	<a href="/register">Welcome</a>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.herosection {
		display: flex;
		height: 80%;
	}

	img {
		height: 80%;
		width: 100%;
	}
</style>
