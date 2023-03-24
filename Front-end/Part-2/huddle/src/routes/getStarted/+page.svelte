<script>
	import img from '$lib/image/wave.svg';
	// for the loading animation before the from
	import QuestionareForm from '$lib/components/questionareForm.svelte';
	import Animate from '$lib/components/loadingAnime.svelte';

	// the form functionality
	let isSubmitting = false;

	const submitHandler = () => {
		isSubmitting = true;
	};
</script>

<div class="herosection">
	<img src={img} alt="svg" />
</div>
<Animate />
<QuestionareForm />

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
