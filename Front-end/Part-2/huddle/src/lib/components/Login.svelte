<script lang="js">
	import { currentUser, pb } from './pocketbase';

	let username;
	let password;

	async function Login() {
		await pb.collection('users').authWithPassword(username, password);
	}

	async function signUp() {
		try {
			const data = {
				username,
				password,
				passwordConfirm: password,
				name: 'hi mom!'
			};
			const createdUser = await pb.collection('users').create(data);
			console.log(createdUser);
			await Login();
		} catch (err) {
			console.log(err);
		}
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if $currentUser}
	<p>
		Signed in as {$currentUser.username}
		<button on:click={signOut}>Sign out</button>
	</p>
{:else}
	<form on:submit|preventDefault>
		<input placeholder="Username" type="text" bind:value={username} />
		<input placeholder="Password" type="password" bind:value={password} />
		<div class="container">
			<button on:click={signUp}>Sign Up</button>
			<button on:click={Login}>Login</button>
		</div>
	</form>
{/if}
