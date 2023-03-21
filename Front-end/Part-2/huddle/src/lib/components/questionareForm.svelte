<!--
    <script>
	import { onMount } from 'svelte';

	let name = '';
	let age = '';
	let gender = '';
	let question1 = '';
	let question2 = '';
	let question3 = '';

	let error = '';

	const submitForm = async () => {
		try {
			const data = {
				name,
				age,
				gender,
				question1,
				question2,
				question3
			};
			await post('/api/questionnaire', data);
			alert('Thanks for submitting your questionnaire!');
		} catch (err) {
			error = err.message;
		}
	};

	onMount(() => {
		// Pre-select the first gender option
		gender = 'male';
	});
</script>

<form on:submit|preventDefault={submitForm}>
	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" id="name" bind:value={name} required />
	</div>
	<div class="form-group">
		<label for="age">Age</label>
		<input type="number" id="age" bind:value={age} required />
	</div>
	<div class="form-group">
		<label for="gender">Gender</label>
		<select id="gender" bind:value={gender}>
			<option value="male">Male</option>
			<option value="female">Female</option>
			<option value="non-binary">Non-binary</option>
			<option value="prefer-not-to-say">Prefer not to say</option>
		</select>
	</div>
	<div class="form-group">
		<label for="question1">Question 1</label>
		<textarea id="question1" bind:value={question1} required />
	</div>
	<div class="form-group">
		<label for="question2">Question 2</label>
		<textarea id="question2" bind:value={question2} required />
	</div>
	<div class="form-group">
		<label for="question3">Question 3</label>
		<textarea id="question3" bind:value={question3} required />
	</div>
	{#if error}
		<div class="error">{error}</div>
	{/if}
	<button type="submit">Submit</button>
</form>
-->
<script>
	let questions = [
		{
			question: 'What is the capital of France?',
			options: ['Paris', 'London', 'Berlin', 'Madrid'],
			answer: 0
		},
		{
			question: 'What is the capital of France?',
			options: ['Paris', 'London', 'Berlin', 'Madrid'],
			answer: 0
		},
		{
			question: 'What is the capital of France?',
			options: ['Paris', 'London', 'Berlin', 'Madrid'],
			answer: 0
		},
		{
			question: 'What is the capital of France?',
			options: ['Paris', 'London', 'Berlin', 'Madrid'],
			answer: 0
		},
		{
			question: 'What is the highest mountain in the world?',
			options: ['Everest', 'K2', 'Makalu', 'Lhotse']
		},
		{
			question: 'What is the largest planet in our solar system?',
			options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus']
		},
		{
			question: 'What is the highest mountain in the world?',
			options: ['Everest', 'K2', 'Makalu', 'Lhotse']
		},
		{
			question: 'What is the largest planet in our solar system?',
			options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus']
		},
		{
			question: 'What is the highest mountain in the world?',
			options: ['Everest', 'K2', 'Makalu', 'Lhotse']
		},
		{
			question: 'What is the largest planet in our solar system?',
			options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus']
		},
		{
			question: 'What is the highest mountain in the world?',
			options: ['Everest', 'K2', 'Makalu', 'Lhotse']
		},
		{
			question: 'What is the largest planet in our solar system?',
			options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus']
		},
		{
			question: 'What is the highest mountain in the world?',
			options: ['Everest', 'K2', 'Makalu', 'Lhotse']
		},
		{
			question: 'What is the largest planet in our solar system?',
			options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus']
		},
		{
			question: 'What is the highest mountain in the world?',
			options: ['Everest', 'K2', 'Makalu', 'Lhotse']
		},
		{
			question: 'What is the largest planet in our solar system?',
			options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus']
		},
		{
			question: 'What is the capital of France?',
			options: ['Paris', 'London', 'Berlin', 'Madrid'],
			answer: 0
		}
	];
	let answers = new Array(questions.length).fill(0);
	let questionPointer = -1;
	const numQuestions = answers.length;

	function goToQuestion(index) {
		questionPointer = index;
	}
</script>

<div class="app">
	{#if questionPointer == -1}
		<div class="start-screen">
			<button
				on:click={() => {
					goToQuestion(0);
				}}
			>
				Start Quiz
			</button>
		</div>
	{:else if !(questionPointer > numQuestions - 1)}
		<div class="quiz-screen">
			<div class="main">
				<h2>
					{questions[questionPointer].question}
				</h2>
				<div class="option">
					{#each questions[questionPointer].options as opt, i}
						<button
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
				<div class="progress-bar">
					<div class="progress" style="width:{((questionPointer + 1) / numQuestions) * 100}%" />
				</div>
				<div class="buttons">
					{#if questionPointer > 0}
						<button
							class="arrow-button"
							on:click={() => {
								goToQuestion(questionPointer - 1);
							}}
						>
							&lt;
						</button>
					{/if}
					{#if questionPointer < numQuestions - 1}
						<button
							class="arrow-button"
							on:click={() => {
								goToQuestion(questionPointer + 1);
							}}
						>
							&gt;
						</button>
					{:else}
						<button
							class="arrow-button"
							on:click={() => {
								goToQuestion(-1);
							}}
						>
							Finish
						</button>
					{/if}
				</div>
			</div>
		</div>
	{:else}
		<div class="score-screen">
			Your score is: {answers.reduce((total, value) => total + value)}
		</div>
	{/if}
</div>

<style>
	.arrow-button {
		font-size: 24px;
		border: none;
		background: none;
		color: blue;
		cursor: pointer;
	}

	.progress-bar  {
		width: 20%;
        margin-top: 10px;
		background-color: blueviolet;
	}

	.progress {
		height: 100%;
		background-color: blue;
	}
</style>
