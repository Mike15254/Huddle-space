<script>
	import { navigate } from 'svelte-routing';
	import Anime from './loadingAnime.svelte';

	function handleCreateAccount() {
		navigate('/login');
	}

	let questions = [
		{
			question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur.',
			options: [' consectetur', 'pipeline', 'hyphen', 'nderscore'],
			correctIndex: 3
		},
		{
			question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur.',
			options: [' consectetur', ' consectetur', ' consectetur', ' consectetur'],
			correctIndex: 3
		},
		{
			question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur.',
			options: ['memory', 'libh', 'string', 'dosh'],
			correctIndex: 1
		},
		{
			question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur.',
			options: [' consectetur', 'operator', ' consectetur', 'operator'],
			correctIndex: 1
		},
		{
			question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur.',
			options: ['dealloc', ' consectetur', 'free', ' consectetur'],
			correctIndex: 2
		}
	];
	let answers = new Array(questions.length).fill(null);
	let questionPointer = -1;
	let totalQuestion = 5;
</script>

<div class="app">
	{#if questionPointer == -1}
		<div class="start-screen">
			<button
				on:click={() => {
					questionPointer = 0;
				}}
			>
				<h3 class="btn">Help Us Match you to the right Therapist</h3>
			</button>
		</div>
	{:else if !(questionPointer > answers.length - 1)}
		<div class="quiz-screen">
			<div class="progress-bar">
				<div style="width:{(questionPointer / questions.length) * 100}%" />
			</div>
			<div class="main">
				<h4>
					{questions[questionPointer].question}
				</h4>
				<div class="options">
					{#each questions[questionPointer].options as opt, i}
						<button
							class={answers[questionPointer] == i ? 'selected' : ''}
							on:click={() => {
								answers[questionPointer] = i;
							}}
						>
							{opt}
						</button>
					{/each}
				</div>
			</div>
			<div class="footer">
				<div class="buttons">
					<button
						disabled={questionPointer == 0}
						on:click={() => {
							questionPointer--;
						}}
						class="btn-left"
					>
						&lt;
					</button>
					<button
						on:click={() => {
							questionPointer++;
							if (questionPointer === totalQuestion - 1) {
							}
						}}
						class="btn-right"
						type="submit"
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.app {
		position: absolute;
		top: 20vh;
		left: 20vw;
		width: 60vw;
		height: 50vh;
	}
	button[disabled] {
		color: #aaa;
	}

	.app .start-screen {
		padding-top: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.app .start-screen button,
	.app .score-screen button {
		padding: 10px 20px;
		height: 100px;
		width: 500px;
		background: #41b868;
		color: #070707;
		border: 0.2rem solid rgba(50, 83, 67, 0.85);
		outline: none;
		border-radius: 20px;
		cursor: pointer;
		line-height: 8px;
	}
	.app .start-screen button:hover {
		background: #31e26c;
		color: #000000;
		border: 0.2rem solid rgba(33, 189, 176, 0.85);
		transition-duration: 0.2s;
	}

	.btn {
		font-size: 20px;
	}

	.app .quiz-screen {
		padding: 6vh;
	}
	.app .quiz-screen .main {
		padding: 15px;
		background: rgba(234, 224, 224, 0.25);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		border-radius: 30px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.app .quiz-screen .main .options {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.app .quiz-screen .main .options button {
		width: 100%;
		border: 0.2rem solid #9bd58b;
		outline: none;
		color: #292b29;
		background: #9bd58b;
		font-size: 20px;
		padding: 10px;
		border-radius: 30px;
		text-align: left;
		margin: 10px;
	}
	.app .quiz-screen .main .options button:hover {
		background: #63b37b;
		border: 0.2rem solid #63b37b;
	}
	.app .quiz-screen .main .options button.selected {
		background: #111;
		border: 0.2rem solid #111;
		color: #a39d9d;
	}

	.app .quiz-screen .progress-bar {
		width: 90%;
		margin-bottom: 30px;
		margin-left: 29px;
		height: 8px;
		background: #aaa;
		border-radius: 30px;
		overflow: hidden;
	}
	.app .quiz-screen .progress-bar div {
		height: 100%;
		background: #0d4214;
	}
	.footer .buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.footer button[disabled] {
		color: #aaa;
	}
	.footer .buttons .btn-left {
		border: 0.2rem solid transparent;
		background: transparent;
		font-size: 60px;
		font-weight: 300;
	}
	.footer .buttons .btn-left:hover {
		content: 'prev';
		color: #31e26c;
	}
	.footer .buttons .btn-right {
		display: flex;
		background: transparent;
		border: 0.2rem solid transparent;
		font-size: 60px;
		font-weight: 300;
	}
	.footer .buttons .btn-right:hover {
		content: 'prev';
		color: #31e26c;
	}
</style>
