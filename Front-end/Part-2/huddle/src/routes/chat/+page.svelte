<script>
	import Login from '$lib/components/Login.svelte';
	import Messages from '$lib/components/messages.svelte';
	import { currentUser } from '$lib/components/pocketbase';
</script>


<Login />

{#if $currentUser}
	<Messages />
{/if}
