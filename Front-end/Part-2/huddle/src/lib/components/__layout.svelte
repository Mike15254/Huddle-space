<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script>
	import Transition from '$lib/components/Transition.svelte';
	import Questianere from '$lib/components/questionareForm.svelte';
	export let key;
</script>

<nav>
	<p>No anniation</p>
</nav>
<Transition>
	<!-- Everything inside this transition component will be animated! -->
	<Questianere />

	<!-- In this example, that encompasses all the page contents besides the navbar. -->
	<slot />
</Transition>
