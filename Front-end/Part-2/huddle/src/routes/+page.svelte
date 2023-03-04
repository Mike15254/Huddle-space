<main>
	<div class="content-container">
		<nav>
			<div class="nav-space0">
				<a href="/">
					<svg
						role="img"
						aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00"
						class="smiley"
						viewBox="0 0 128 128"
						width="128px"
						height="128px"
					>
						<defs>
							<clipPath id="smiley-eyes">
								<circle
									class="smiley__eye1"
									cx="64"
									cy="64"
									r="8"
									transform="rotate(-40,64,64) translate(0,-56)"
								/>
								<circle
									class="smiley__eye2"
									cx="64"
									cy="64"
									r="8"
									transform="rotate(40,64,64) translate(0,-56)"
								/>
							</clipPath>
							<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stop-color="#000" />
								<stop offset="100%" stop-color="#fff" />
							</linearGradient>
							<mask id="smiley-mask">
								<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
							</mask>
						</defs>
						<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
							<g>
								<rect
									fill="hsl(193,90%,50%)"
									width="128"
									height="64"
									clip-path="url(#smiley-eyes)"
								/>
								<g fill="none" stroke="hsl(193,90%,50%)">
									<circle
										class="smiley__mouth1"
										cx="64"
										cy="64"
										r="56"
										transform="rotate(180,64,64)"
									/>
									<circle
										class="smiley__mouth2"
										cx="64"
										cy="64"
										r="56"
										transform="rotate(0,64,64)"
									/>
								</g>
							</g>
							<g mask="url(#smiley-mask)">
								<rect
									fill="hsl(223,90%,50%)"
									width="128"
									height="64"
									clip-path="url(#smiley-eyes)"
								/>
								<g fill="none" stroke="hsl(223,90%,50%)">
									<circle
										class="smiley__mouth1"
										cx="64"
										cy="64"
										r="56"
										transform="rotate(180,64,64)"
									/>
									<circle
										class="smiley__mouth2"
										cx="64"
										cy="64"
										r="56"
										transform="rotate(0,64,64)"
									/>
								</g>
							</g>
						</g>
					</svg>
				</a>
			</div>
			<div class="nav-space1">
				<a href="/about">About</a>
				<a href="/FAQ">FAQ</a>
				<a href="/">Advice</a>
			</div>
			<div class="nav-space2">
				<a href="/">Login</a>
				<a href="/">Get Started</a>
			</div>
		</nav>
		<section class="hero-wrapper">
			<div class="hero">
				<div class="container">
					<h1>Tuzungumze</h1>
					<div class="typewriter">
						<h3>You deserve to be happy</h3>
					</div>
					<a href="/" class="btn" type="button">
						<span class="btn__text">Get Started</span>
					</a>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	:root {
		--hue: 223;
		--bg: hsl(var(--hue), 90%, 90%);
		--fg: hsl(var(--hue), 90%, 10%);
		--trans-dur: 0.3s;
		font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
	}
	.content-container {
		background-size: cover;
		background-image: linear-gradient(rgba(50, 83, 67, 0.85), rgb(51 83 67 / 85%)),
			url(../gatYou2.jpeg);
		width: 100%;
		height: 100vh;
	}

	.hero-wrapper {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 70vh;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: space-between;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		cursor: pointer;
	}
	a:hover {
		color: crimson;
	}

	.nav-space0 {
		padding: 30px;
	}

	.nav-space1 {
		display: flex;
		justify-content: space-around;
		padding-top: 30px;
		padding-left: 20px;
		padding-right: 20px;
		font-size: 20px;
		text-align: center;
	}

	.nav-space1 a {
		color: rgb(250, 236, 236);
	}

	.nav-space1 a:hover {
		color: #181616;
		transition: 250ms;
	}

	.nav-space1 a {
		padding: 10px;
	}

	.nav-space2 {
		display: flex;
		justify-content: space-between;
		text-align: center;
		padding-top: 30px;
	}

	.nav-space2 a {
		padding: 10px;
	}

	.btn {
		display: inline-block;
		padding: 0.7rem 2rem;
		border: 0.2rem solid rgba(50, 83, 67, 0.85);
		font-size: 20px;
		border-radius: 2rem;
		background-color: rgba(34, 141, 89, 0.85);
		color: #ffffff;
		text-decoration: none;
	}

	.btn:hover {
		color: #ffffff;
		background-color: rgba(14, 226, 120, 0.85);
		transition-duration: 0.2s;
	}

	.btn__text {
		font-size: 30px;
	}

	.hero-wrapper .hero {
		color: #ffffff;
	}

	.hero-wrapper .hero h1 {
		margin: auto;
		text-align: center;
		font-size: 70px;
		letter-spacing: 9px;
	}

	/** Smiley face */
	.smiley {
		width: 4em;
		height: 4em;
	}
	.smiley__eye1,
	.smiley__eye2,
	.smiley__mouth1,
	.smiley__mouth2 {
		animation: eye1 4s ease-in-out infinite;
	}
	.smiley__eye1,
	.smiley__eye2 {
		transform-origin: 64px 64px;
	}
	.smiley__eye2 {
		animation-name: eye2;
	}
	.smiley__mouth1 {
		animation-name: mouth1;
	}
	.smiley__mouth2 {
		animation-name: mouth2;
		visibility: hidden;
	}

	/* Dark theme */
	@media (prefers-color-scheme: dark) {
		:root {
			--bg: hsl(var(--hue), 90%, 10%);
			--fg: hsl(var(--hue), 90%, 90%);
		}
	}

	/* Animations */
	@keyframes eye1 {
		from {
			transform: rotate(-260deg) translate(0, -56px);
		}
		50%,
		60% {
			animation-timing-function: cubic-bezier(0.17, 0, 0.58, 1);
			transform: rotate(-40deg) translate(0, -56px) scale(1);
		}
		to {
			transform: rotate(225deg) translate(0, -56px) scale(0.35);
		}
	}
	@keyframes eye2 {
		from {
			transform: rotate(-260deg) translate(0, -56px);
		}
		50% {
			transform: rotate(40deg) translate(0, -56px) rotate(-40deg) scale(1);
		}
		52.5% {
			transform: rotate(40deg) translate(0, -56px) rotate(-40deg) scale(1, 0);
		}
		55%,
		70% {
			animation-timing-function: cubic-bezier(0, 0, 0.28, 1);
			transform: rotate(40deg) translate(0, -56px) rotate(-40deg) scale(1);
		}
		to {
			transform: rotate(150deg) translate(0, -56px) scale(0.4);
		}
	}
	@keyframes eyeBlink {
		from,
		25%,
		75%,
		to {
			transform: scaleY(1);
		}
		50% {
			transform: scaleY(0);
		}
	}
	@keyframes mouth1 {
		from {
			animation-timing-function: ease-in;
			stroke-dasharray: 0 351.86;
			stroke-dashoffset: 0;
		}
		25% {
			animation-timing-function: ease-out;
			stroke-dasharray: 175.93 351.86;
			stroke-dashoffset: 0;
		}
		50% {
			animation-timing-function: steps(1, start);
			stroke-dasharray: 175.93 351.86;
			stroke-dashoffset: -175.93;
			visibility: visible;
		}
		75%,
		to {
			visibility: hidden;
		}
	}
	@keyframes mouth2 {
		from {
			animation-timing-function: steps(1, end);
			visibility: hidden;
		}
		50% {
			animation-timing-function: ease-in-out;
			visibility: visible;
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: -351.86;
		}
	}
	.typewriter {
		color: #fff;
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.1em; /* Adjust as needed */
		animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 5%;
		}
		to {
			width: 100%;
		}
	}
</style>
