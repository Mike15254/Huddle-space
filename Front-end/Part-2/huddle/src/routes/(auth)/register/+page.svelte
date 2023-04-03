<section class="post-comments">
	<div class="form-sty">
		<header>
			<h2 class="section-title">Create an account</h2>
		</header>
		<form action="#" method="post">
			<fieldset>
				<div class="form-group col-1-2">
					<label for="your-first-name">First Name</label>
					<div class="form-field">
						<span class="form-field-container">
							<input
								type="text"
								name="your-first-name"
								id="your-first-name"
								placeholder="e.g. Mike"
								maxlength="35"
								pattern="[A-Za-zÀ-ž\s]{3}"
								autocomplete="on"
								accesskey="f"
								required
							/>
							<i class="form-field-icon" />
						</span>
						<p class="form-help">
							First name should be at least 3 characters and only contains letters
						</p>
					</div>
				</div>
				<div class="form-group col-1-2">
					<label for="your-last-name">Last Name</label>
					<div class="form-field">
						<span class="form-field-container">
							<input
								type="text"
								name="your-last-name"
								id="your-last-name"
								placeholder="e.g. Smith"
								pattern="[A-Za-zÀ-ž\s]{3}"
								maxlength="40"
								autocomplete="on"
								accesskey="l"
								required
							/>
							<i class="form-field-icon" />
						</span>
						<p class="form-help">
							Last name should be at least 3 characters and only contains letters
						</p>
					</div>
				</div>
				<div class="form-group col-2-3">
					<label for="your-email">Email</label>
					<div class="form-field">
						<span class="form-field-container">
							<input
								type="email"
								name="your-email"
								id="your-email"
								placeholder="e.g. youremail@gmail.com"
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2}$"
								maxlength="55"
								autocomplete="on"
								accesskey="e"
								required
							/>
							<i class="form-field-icon" />
						</span>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
</section>

<style>
	/* Basic form
              ============================= */

	.post-comments {
		width: 50%;
		margin: 5rem 5rem auto;
		padding-left: 17rem;
	}

	.post-comments .section-title {
		font-variant: small-caps;
	}

	label {
		cursor: pointer;
		display: block;
		white-space: nowrap;
		font-size: 1rem;
		padding: 0 0 0.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
		margin: 0;
	}

	fieldset {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		border: 0;
		padding: 0 0 2rem;
	}

	label {
		cursor: pointer;
		display: block;
		white-space: nowrap;
		font-size: 1rem;
		padding: 0 0 0.5rem;
	}

	input[type='text'],
	input[type='email'],
	textarea {
		position: relative;
		width: 100%;
		padding: 1.2rem;
		line-height: 1;
		border: 0.1rem solid #090909;
		background-color: #ffffff;
		box-shadow: none;
		outline: 0;
	}

	input[type='text'],
	input[type='email'] {
		padding-right: 3rem;
	}

	input[type='text']:focus,
	input[type='email']:focus,
	textarea:focus {
		border: 0.1rem solid #a0a0a0;
		background-color: #f3f3f3;
	}

	::placeholder {
		font-style: italic;
		font-size: 1rem;
	}

	/* Form group
  ============================= */

	.form-group {
		padding: 1rem;
		margin: 0;
		background-color: #ffffff;
	}

	.form-group:focus-within {
		background-color: #f3f3f3;
		transition: 0.3s;
	}

	/* Form field
  ============================= */

	.form-field-container {
		position: relative;
		display: flex;
	}

	.form-field-icon {
		font-style: normal;
	}

	/* Form help
  ============================= */

	.form-group .form-help {
		margin: 0;
		line-height: 1.3;
		letter-spacing: 0.019rem;
		color: #353535;
		font-size: 0.8rem;
		max-height: 0;
		transition: 0.3s;
		overflow: hidden;
	}

	.form-group:focus-within .form-help {
		max-height: 10rem;
		margin: 0.4rem 0 0;
	}

	/* Form error handling
============================= */

	/* The following code is used to place the icon in the after pseudo element. Because after and before are not possible in an input, we need to use a span that will be positioned on the right of our input. */

	input:not(:placeholder-shown) ~ .form-field-icon::after {
		height: 100%;
		right: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 1.3em;
	}

	/* Because inputs are invalid by default, we need to be careful and show the icon when we are not in focus and when when the input is not empty (placeholder-shown). Careful with this one because it is not supported everywhere. */

	input:required:invalid:not(:focus):not(:placeholder-shown) ~ .form-field-icon::after {
		content: '✘';
		color: red;
	}

	input:required:valid ~ .form-field-icon::after {
		content: '✔';
		color: green;
	}

	/* We want to hide the helper text when we are not in focus. The tilte allows us to select a sibling element in CSS */

	input:required:valid ~ .form-help {
		max-height: 0;
	}

	/* Showing a border in a different color is good but not enough. For accessibility purposes, we added an icon when the input is valid or invalid to have a visual distinction that is not only color based.*/

	input:required:invalid:not(:focus):not(:placeholder-shown),
	textarea:invalid:not(:focus):not(:placeholder-shown) {
		border: 0.1rem solid red;
	}

	input:required:valid:not(:placeholder-shown),
	textarea:valid:not(:placeholder-shown) {
		border: 0.1rem solid green;
	}
</style>
