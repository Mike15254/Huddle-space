<script>
	import { navigate } from 'svelte-routing';
	import Anime from './loadingAnime.svelte';

	function handleCreateAccount() {
		navigate('/login');
	}

	let questions = [
		{
			question: 'How often do you feel overwhelmed by your workload/ academic performance?',
			options: [' Rarely', 'Sometimes', 'Often', 'Almost always'],
			correctIndex: 3
		},
		{
			question: 'Have you experienced any major life changes recently?',
			options: [' Rarely', 'Sometimes', 'Often', 'Almost always'],
			correctIndex: 3
		},
		{
			question: ' How often do you feel homesick or miss your family/friends?',
			options: [' Rarely', 'Sometimes', 'Often', 'Almost always'],
			correctIndex: 1
		},
		{
			question: ' How often do you feel stressed about your financial situation?',
			options: ['Rarely', 'Sometimes', 'Often', 'Almost always'],
			correctIndex: 1
		},
		{
			question: ' How often do you feel overwhelmed by social situations or social anxiety?',
			options: ['Rarely', 'Sometimes', 'Often', 'Almost always'],
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
			<h1>Communicate Your way</h1>
			<p>Talk to your therapist however you feel comfortable — text, chat or video.</p>
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
	{:else}
		<Anime />
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
		padding-top: 10vh;
		display: flex;
		flex-direction: column;
	}
	.app .start-screen h1 {
		font-size: 30px;
		padding-left: 17vw;
		color: #ffffff;
	}
	.app .start-screen p {
		padding-left: 5vw;
		font-size: 20px;
		color: #ffffff;
	}

	.app .start-screen button,
	.app .score-screen button {
		padding: 10px 20px;
		margin-left: 12vw;
		margin-top: 15vh;
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
		color: #111;
		border: 0.2rem solid rgba(33, 189, 176, 0.85);
		transition-duration: 0.2s;
	}

	.btn {
		font-size: 20px;
	}

	.app .quiz-screen {
		padding: 3vh;
	}
	.app .quiz-screen .main {
		padding: 15px;
		background: rgba(55, 219, 104, 0.85);
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
		width: 85%;
		margin-bottom: 30px;
		margin-left: 60px;
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
