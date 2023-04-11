<script lang="js">
	import { currentUser, pb } from '$lib/components/pocketbase';
	import Option from '$lib/components/option.svelte';

	let username = '';
	let password = '';

	async function Login() {
		await pb.collection('users').authWithPassword(username, password);
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

{#if $currentUser}
	<h3>
		Welcome Back <span>{$currentUser.username}</span>
	</h3>
	<div class="class-intro">
		<p>For another secion kindly chooce a way</p>
		<form class="frm-1" action="POST">
			<fieldset>
				<legend class="visually-hidden">Your comment</legend>
				<div class="form-group col-2-3">
					<label for="your-title">Title</label>
					<div class="form-field">
						<span class="form-field-container">
							<input
								type="text"
								name="your-title"
								id="your-title"
								placeholder="e.g. I loved that article"
								pattern="[A-Za-zÀ-ž\s]{4}"
								maxlength="75"
								autocomplete="on"
								required
							/>
							<i class="form-field-icon" />
						</span>
						<p class="form-help">Title should be at least 4 characters and only contains letters</p>
					</div>
				</div>
				<div class="form-group col-2-3">
					<label for="your-comment">Comment</label>
					<div class="form-field">
						<span class="form-field-container">
							<textarea
								name="your-comment"
								id="your-comment"
								placeholder="Write your comment here"
								minlength="10"
								required
								cols="30"
								rows="6"
							/>
						</span>
						<p class="form-help">Comment should be at least 10 characters</p>
					</div>
				</div>
				<div class="form-group">
					<button class="button button-primary">Post my comment</button>
				</div>
			</fieldset>
		</form>
		<div class="choice"><Option /></div>

		<button class="sn-first" on:click={signOut}>Sign out</button>
	</div>
{:else}
	<div class="welcom-screen">
		<h3>Login to your account</h3>
		<form class="form-2" on:submit|preventDefault>
			<input type="text" placeholder="e.g. Mike" bind:value={username} />
			<input placeholder="Password" type="password" bind:value={password} />
			<div class="container">
				<button on:click={Login}>Login</button>
			</div>
		</form>
		<a href="/getStarted">Don't have an account? signup</a>
	</div>
{/if}

<style>
	.welcom-screen {
		margin-left: 20vw;
		margin-top: 20vh;
		width: 60vw;
		height: 60vh;
		text-align: center;
	}
    .class-intro {
        width: 100vw;
        height: 100vh;

    }
	.welcom-screen h3 {
		font-size: 28px;
		color: beige;
		line-height: 1rem;
		letter-spacing: 2px;
	}
	.welcom-screen a {
		color: rgb(124, 231, 103);
		text-decoration: none;
	}

	.form-2 {
		display: flex;
		flex-direction: column;
		width: 40vw;
		margin-left: 10vw;
		margin-right: 10vw;
		align-items: center;
	}
	.frm-1 {
		width: 20vw;
	}
	fieldset {
		width: 20vw;
	}
	input {
		padding: 12px;
		width: 40vw;
		color: #ffffff;
		background: none;
		border-radius: 8px;
		border: 2px solid rgb(134, 238, 134);
		margin: 10px;
	}
	input:focus {
		outline: none;
		box-shadow: 0px 0px 9px rgb(42, 165, 144);
	}

	button {
		border-radius: 8px;
		border: 1px solid rgb(102, 228, 144);
		padding: 0.6rem 1.2rem;
		font-size: 1em;
		font-family: inherit;
		background: none;
		cursor: pointer;
		transition: border-color 0.25s;
	}
	button:hover {
		color: #000;
		background: #ffffff;
	}
	::placeholder {
		font-style: italic;
		font-size: 1rem;
	}
	span {
		color: rgb(40, 185, 11);
	}
	h3 {
		font-size: 35px;
		text-align: center;
		color: aquamarine;
	}
	.choice {
		width: 32vw;
		margin-left: 65vw;
        margin-top: -390px;
	}
	.sn-first {
		display: flex;
		margin-left: 89vw;
	}
</style>
