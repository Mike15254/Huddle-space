<body>
	<div>
		<h1>Tuzungumze</h1>
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
		<div>
			<div class="trans">
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
							<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
							<g fill="none" stroke="hsl(193,90%,50%)">
								<circle
									class="smiley__mouth1"
									cx="64"
									cy="64"
									r="56"
									transform="rotate(180,64,64)"
								/>
								<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
							</g>
						</g>
						<g mask="url(#smiley-mask)">
							<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
							<g fill="none" stroke="hsl(223,90%,50%)">
								<circle
									class="smiley__mouth1"
									cx="64"
									cy="64"
									r="56"
									transform="rotate(180,64,64)"
								/>
								<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
							</g>
						</g>
					</g>
				</svg>
			</div>
		</div>
		<h2>You deserve to be happy<br>
			unastahili furaha.			
		</h2>
		<h3> Welcome to TUZUNGUMZE</h3>
		<div>id = <div id="buttoncontainer">
		<button>log in</button>
		<button>sign up</button>
	</div>
	</div>
</body>

<style>
	body {
		margin: auto;
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
		background-color: #f2d036;
		background-image: url(../peace.jpeg);
		background-size: 100% 100%;
		background-attachment: fixed;
	}

	h1,
	h2 {
		align-items: center;
		padding: 20px;
		text-align: center;
	}
	.smiley {
		width: 4em;
		height: 4em;
	}
	.smiley__eye1,
	.smiley__eye2,
	.smiley__mouth1,
	.smiley__mouth2 {
		animation: eye1 3s ease-in-out infinite;
	}
	.smiley__eye1,
	.smiley__eye2 {
		transform-origin: 74px 74px;
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
	#buttoncontainer{
		text-align: center;
	}
	button {
		background-color: rgb(17, 133, 179);
		background-position: center;
		color: black;
		font-size: x-large;
		font-family: sans-serif;
		padding: 10px 30px;
	}
	
	h3{
		text-align: center;
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

	@keyframes gradient {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}

	.wave {
		background: rgba(17, 161, 218, 0.25);
		border-radius: 1000% 1000% 0 0;
		position: fixed;
		width: 200%;
		height: 6em;
		animation: wave 4s -4s linear infinite;
		transform: translate3d(0, 0, 0);
		opacity: 0.8;
		bottom: 0;
		left: 0;
		z-index: -1;
	}

	.wave:nth-of-type(2) {
		bottom: -1.24em;
		animation: wave 18s linear reverse infinite;
		opacity: 0.8;
	}

	.wave:nth-of-type(3) {
		bottom: -2.4em;
		animation: wave 20s -1s reverse infinite;
		opacity: 0.9;
	}

	@keyframes wave {
		2% {
			transform: translateX(1);
		}

		25% {
			transform: translateX(-25%);
		}

		50% {
			transform: translateX(-50%);
		}

		75% {
			transform: translateX(-25%);
		}

		100% {
			transform: translateX(1);
		}
	}

	.trans {
		text-align: center;
	}
</style>
