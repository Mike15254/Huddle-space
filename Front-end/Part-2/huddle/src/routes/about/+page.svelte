<div class="container">
	<div class="content">
		<ul class="team">
			<li class="member co-funder">
				<div class="thumb">
					<img src="https://api.dicebear.com/5.x/open-peeps/svg?seed=Bob" alt="avatar" />
				</div>
				<div class="description">
					<h3>Michael Muia</h3>
					<p>
						Michael is a front-end developer and designer. He writes a bunch of HTML, CSS, and
						JavaScript and shakes the pom-poms for CodePen.<br /><a href="/">@mikemax</a>
					</p>
				</div>
			</li>
			<li class="member co-funder">
				<div class="thumb">
					<img src="https://api.dicebear.com/5.x/open-peeps/svg?seed=Charlie" alt="avatar" />
				</div>
				<div class="description">
					<h3>Dennis Muriuki</h3>
					<p>
						Dennis is a full stack developer. He does JavaScript development for CodePen, both front
						end and back, and just about everything else.<br /><a href="/">@theflakes</a>
					</p>
				</div>
			</li>
			<li class="member">
				<div class="thumb">
					<img src="https://api.dicebear.com/5.x/micah/svg?seed=Boo" alt="avatar" />
				</div>
				<div class="description">
					<h3>Edina Kwamboka</h3>
					<p>
						Edina wears a lot of hats. She is our documentation lead, customer support,
						editor, and community manager.<br /><a href="/">@kwambox</a>
					</p>
				</div>
			</li>
			<li class="member">
				<div class="thumb">
					<img src="https://api.dicebear.com/5.x/micah/svg?seed=Oreo" alt="avatar" />
				</div>
				<div class="description">
					<h3>Ephantus Ng'ang'a</h3>
					<p>
						Ephantus is a designer/developer. He likes to build animations with
						CSS & JavaScript.<br /><a href="/">@emergin</a>
					</p>
				</div>
			</li>
			<li class="member">
				<div class="thumb">
					<img src="https://api.dicebear.com/5.x/open-peeps/svg?seed=Missy" alt="avatar" />
				</div>
				<div class="description">
					<h3>Maureen Rita</h3>
					<p>
						Rita is a full stack'er. Not only a creative and talented designer and
						developer, but a great technical writer.<br /><a href="/">@rita</a>
					</p>
				</div>
			</li>
		</ul>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

	:root {
		--yellow: #ffdd40;
		--dark: #2f313a;
		--deg: -86deg;
		--trans: all 0.4s ease 0s;
	}

	.container {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		display: flex;
		justify-content: center;
		font-family: 'Lato', Arial, Helvetica, serif;
		background: #ffffff;
		font-size: 1em;
	}

	.container *,
	.container *:before,
	.container *:after {
		box-sizing: border-box;
	}

	.content {
		width: 90vmin;
	}

	.team {
		padding: 1em 0 1em 2em;
		margin: 0;
	}

	.member {
		margin: 1em 0 0.2em;
		padding: 0.73em;
		background: #ffffff;
		position: relative;
		list-style: none;
		display: inline-block;
		transform: scale(0.85);
		transition: var(--trans);
	}

	.member:nth-of-type(even) {
		text-align: right;
		background: linear-gradient(-83deg, var(--yellow) 0 97%, #fff0 calc(97% + 1px) 100%);
	}

	.thumb {
		width: 13vmin;
		height: 13vmin;
		float: left;
		margin-right: 1.25em;
		background: #ffffff;
		transform: rotate(-4deg);
		transition: var(--trans);
		border-radius: 0.25em;
		overflow: hidden;
		margin-left: -3em;
		padding: 0.5em;
	}

	.member:nth-of-type(even) .thumb {
		--deg: 86deg;
		float: right;
		margin-left: 2em;
		margin-right: -3em;
		transform: rotate(4deg);
	}

	.thumb img {
		width: 100%;
		height: 100%;
		border-radius: 0.25em;
		filter: grayscale(1);
		background: var(--dark);
	}

	.member:hover .thumb img {
		filter: none;
		transition: var(--trans);
	}

	.description {
		padding-top: 1vmin;
	}

	.description p {
		padding: 0 2em;
		margin-bottom: 1em;
	}

	h3 {
		background: linear-gradient(182deg, #fff0 60%, var(--dark) 0 100%);
		display: inline;
		transform: rotate(-2deg);
		position: absolute;
		margin: 0;
		margin-top: -2.25em;
		left: 9vmin;
		padding: 0.5em 0.75em;
		color: #2f313a;
		border-radius: 0.25em;
		font-size: 1.35em;
		transform-origin: left bottom;
	}

	.member:nth-of-type(even) h3 {
		left: inherit;
		right: 9vmin;
		transform: rotate(2deg);
		transform-origin: right bottom;
		background: linear-gradient(-182deg, #fff0 60%, var(--dark) 0 100%);
	}

	.member:hover h3 {
		transition: var(--trans);
		transform: rotate(0deg);
		background: linear-gradient(180deg, #fff0 59%, var(--dark) 0 100%);
	}

	.co-funder:after {
		content: 'CO-FUNDER';
		font-size: 0.75em;
		position: absolute;
		top: -1.5em;
		background: var(--yellow);
		right: 4em;
		padding: 0.35em 0.75em 0.5em;
		border-radius: 0.25em;
		color: var(--dark);
		font-weight: bold;
	}

	.co-funder:nth-of-type(even):after {
		right: inherit;
		left: 4em;
	}

	.description p a {
		display: inline-block;
		margin: 0.5em 0 0 0;
		background: var(--dark);
		color: var(--yellow);
		padding: 0.1em 0.5em 0.35em;
		border-radius: 0.5em;
		text-decoration: none;
		transition: var(--trans);
	}
</style>
