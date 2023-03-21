<script>
	'use strict';

	const showButton = document.querySelectorAll('.show-btn');
	const closeButton = document.querySelector('.close-btn');
	const quotes = document.querySelector('.quotes');
	const overlay = document.querySelector('.overlay');

	for (let i = 0; i < showButton.length; i++) {
		showButton[i].adddEventListener('click', actionOpen);
	}

	const actionOpen = function () {
		quotes.classList.remove('hidden');
		overlay.classList.remove('hidden');
	};

	const actionClose = function () {
		quotes.classList.add('hidden');
		overlay.classList.add('hidden');
	};

	closeButton.addEventListener('click', actionClose);
	overlay.addEventListener('click', actionClose);
</script>

<main>
	<div class="content-container">
		<section class="hero-wrapper">
			<div class="hero">
				<div class="container">
					<h3>What advice is Tuzungumze recommending as you are looking for a therapist?</h3>
					<div class="typewritter">
						<p>
							Tuzungumze is a Dekut based Student online Therapy platform: How it Can Help? Are you
							a student in Dekut who is feeling overwhelmed, anxious, or stressed out? If so,
							Tuzungumze student therapy may be just what you need to get back on track. Online
							student therapy is a form of therapy that is designed specifically for college
							students and is conducted online. Some of the benefits of online student therapy
							include increased accessibility, flexibility, and convenience. With Tuzungumze student
							therapy, you can access mental health support when you need it, without having to
							leave campus or schedule appointments during class time. This can be especially
							helpful for students who live in remote areas, have busy schedules, or are
							uncomfortable with traditional in-person therapy settings. Common mental health
							challenges that campus students may face include stress, anxiety, depression, and
							homesickness. Tuzungumze student therapy can help you address these challenges and
							develop coping strategies that work for you. If you're interested in finding a
							therapist, start by loging in Tuzungumze where we will connect you with the school's
							counseling center and mental health services department. Be sure to read reviews and
							ask for recommendations from friends or family members. Remember, it's okay to ask for
							help when you need it. Seeking therapy is a sign of strength, not weakness. You are
							not alone, and there are people who care about you and want to help. You've got this!
						</p>
						<div class="button">
							<button class="show-btn">Quotes</button>
							<button class="show-btn">Anything</button>
							<button class="show-btn">Books</button>
						</div>
					</div>
					<div class="quotes hidden">
						<div class="close-btn">&times;</div>
						<nav class="nav-space1">
							<blockquote5>
								"The only way out is through."
								<cite>- Robert Frost</cite>
							</blockquote5><br /><br />
							<blockquote0>
								"Be the change that you wish to see in the world."
								<cite>- Mahatma Gandhi</cite>
							</blockquote0><br /><br />
							<blockquote1>
								"It does not matter how slowly you go as long as you do not stop."
								<cite>- Confucius</cite>
							</blockquote1><br />
							<br />
							<blockquote4>
								"Life is 10% what happens to us and 90% how we react to it."
								<cite>- Charles R. Swindoll</cite>
							</blockquote4><br /><br />
							<blockquote2>
								"We cannot change the cards we are dealt, just how we play the hand."
								<cite>- Randy Pausch</cite>
							</blockquote2><br /><br />
							<blockquote3>
								"What lies behind us and what lies before us are tiny matters compared to what lies
								within us."<br /><br />
								<cite>- Ralph Waldo Emerson</cite>
							</blockquote3><br />
						</nav>
						<div class="overlay hidden" />
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	blockquote0 {
		color: rgba(234, 240, 236, 0.85);
		border-left: 5px solid #e61717;
		background-color: #1dd710;
		padding: 10px;
		text-align: left;
		position: relative;
	}
	blockquote5 {
		color: rgba(234, 240, 236, 0.85);
		border-left: 5px solid #e61717;
		background-color: #3113b6;
		padding: 10px;
		text-align: left;
		position: left;
	}
	blockquote4 {
		color: rgba(234, 240, 236, 0.85);
		border-left: 5px solid #e61717;
		background-color: #c6530b;
		padding: 10px;
		height: 0px;
		text-align: left;
		position: relative;
	}
	blockquote3 {
		color: rgba(234, 240, 236, 0.85);
		border-left: 5px solid #e61717;
		background-color: #78aa0d;
		padding: 10px;
		text-align: left;
	}
	blockquote2 {
		color: rgba(234, 240, 236, 0.85);
		border-left: 5px solid #e61717;
		background-color: #0c8dad;
		padding: 10px;
		text-align: left;
	}
	blockquote1 {
		color: rgba(234, 240, 236, 0.85);
		border-left: 5px solid #e61717;
		background-color: #bc0d62;
		padding: 10px;
		text-align: left;
	}

	:root {
		--hue: 223;
		--bg: hsl(var(--hue), 90%, 90%);
		--fg: hsl(var(--hue), 90%, 10%);
		--trans-dur: 0.3s;
		font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
	}
	.content-container {
		background-size: cover;
		background-image: linear-gradient(rgba(48, 5, 150, 0.85), rgb(51 83 67 / 85%)),
			url(../therapy.jpg);
		width: 110%;
		height: 150vh;
	}

	.hero-wrapper {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 90vh;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: space-between;
		cursor: pointer;
		justify-self: unset;
	}

	.nav-space1 {
		display: inline-block;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		justify-content: left;
		padding-top: 500px;
		padding-left: 20px;
		padding-right: 20px;
		font-size: 20px;
		text-align: center;
		align-items: flex-start;
	}

	.hero-wrapper .hero {
		color: #ffffff;
	}

	h3 {
		text-shadow: 1px 1px 1px rgb(243, 247, 247), 2px 2px 1px rgb(27, 22, 22);
	}
	p {
		font-size: 0.7rem;
		color: white;
		line-height: 1.6;
	}
	.typewritter {
		color: goldenrod;
		padding: 10px;
		padding-left: 20px;
		justify-content: space-around;
	}
	.hidden {
		display: none;
	}
	.show-btn {
		background-color: rgb(85, 146, 85);
		color: white;
		font-size: 16px;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin-right: 30px;
	}
	.show-btn:hover {
		background-color: darkblue;
	}
</style>
