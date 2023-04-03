<script>
	import { currentUser, pb } from './pocketbase';

	let firstName;
	let lastName;
	let username;
	let email;
	let password;

	async function signUp() {
		try {
			const data = {
				username,
				email,
				password,
				passwordConfirm: password,
				firstName,
				lastName,
				field: 'hello world'
			};
			const createdUser = await pb.collection('users1').create(data);
		} catch (err) {
			console.error(err);
		}
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if $currentUser}
	<p>
		Signed in as {$currentUser.username}
		<button on:click={signOut}>Sign Out</button>
	</p>
{:else}
	<form on:submit|preventDefault>
		<input placeholder="Username" type="text" bind:value={username} />
		<input placeholder="firstName" type="text" bind:value={firstName} />
		<input placeholder="lastName" type="text" bind:value={lastName} />
		<input placeholder="email" type="email" bind:value={email} />

		<input placeholder="Password" type="password" bind:value={password} />
		<button on:click={signUp}>Sign Up</button>
	</form>
{/if}
