<script>
	import Login from '$lib/components/Login.svelte';
	import Messages from '$lib/components/messages.svelte';
	import { currentUser } from '$lib/components/pocketbase';
	import './app.css';
</script>

<div class="app">
	<h1>Welcome to Tuzungumze Chat</h1>
	<h2>First create an account to get started</h2>
	<Login />

	{#if $currentUser}
		<Messages />
	{/if}
</div>
