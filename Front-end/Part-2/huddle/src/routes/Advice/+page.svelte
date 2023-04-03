<main>
	<div class="content-container">
		<section class="hero-wrapper">
			<div class="hero">
				<div class="container">
					<div class="typewritter">
						<h3>What advice is Tuzungumze recommending as you are looking for a therapist?</h3>
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
					</div>
					<div class="quotes">
						<p>"The only way out is through." - Robert Frost</p>
						<p>"Be the change that you wish to see in the world." - Mahatma Gandhi</p>
						<p>"It does not matter how slowly you go as long as you do not stop." - Confucius</p>
						<p>
							"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll
						</p>
						<p>
							"We cannot change the cards we are dealt, just how we play the hand." - Randy Pausch
						</p>
					</div>
					<div class="books">
						<!-- <img src={myImage} alt="my image" class="image" /> -->
						<p class="one">1. Mindset: The New Psychology of Success by Carol S. Dweck</p>
						<p class="one">2. Attachment Theory in Practice by Sue Johnson</p>
						<p class="one">3. Grit: The Power of Passion and Perseverance by Angela Duckworth</p>
						<p class="one">
							4. The Gift of Therapy: An Open Letter to a New Generation of Therapists and their
							Patients by Irvan Yalom
						</p>
						<p class="one">5. The Structure of Scientific Revolutions by Thomas Kuhn</p>
					</div>
					<div class="extra">
						<h2>Academic Pressure</h2>
						<p>
							Remember that you are capable of overcoming any challenge that comes your way, and
							every small step you take towards your goal is a victory in itself.
						</p>
						<p>
							Stay focused on your long-term goals, but don't forget to celebrate your progress and
							take care of yourself along the way.
						</p>

						<h3>Here are some of the ways to cope with academic pressure</h3>
						<p>
							Prioritize your time. Determine which tasks are most important or urgent and focus on
							those first.
						</p>
						<p>
							Take breaks when you need them. Stepping away from your work for a few minutes can
							help you recharge and come back more focused.
						</p>
						<p>
							Stay connected with friends and family. Having a support network can help you feel
							more resilient and less alone.
						</p>
						<p>
							Remember that academic success is not the only measure of your worth. You are more
							than your grades or test scores.
						</p>
						<p>
							Seek professional help if you are struggling with your mental health. Your school may
							have resources available, such as counseling services or support groups.
						</p>
					</div>
					<div class="social">
						<h2>Social Isolation</h2>
						<p>
							Remember that you're not alone in feeling isolated, and reaching out for support can
							make a big difference. Whether it's connecting with friends and family virtually,
							joining a virtual club or group, or talking to a counselor, taking action to improve
							your social connections can help boost your well-being and sense of belonging
						</p>
						<h3>some of the ways to deal with social isolation</h3>
						<p>
							Stay connected with friends and family virtually - use video chats, phone calls, or
							messaging apps to stay in touch.
						</p>
						<p>
							Join virtual clubs or groups that align with your interests, hobbies, or passions.
							This can be a great way to meet new people and form meaningful connections
						</p>
						<p>
							Take advantage of online resources - there are many resources available online that
							can help you stay engaged and connected, such as virtual tours, online classes, or
							webinars.
						</p>
						<p>
							Practice self-care - take time to do things that make you feel good, such as exercise,
							meditation, or creative hobbies. This can help boost your mood and reduce feelings of
							isolation.
						</p>
						<p>
							Seek professional help if you're struggling with your mental health. A therapist or
							counselor can provide you with support and guidance to help you manage your feelings
							of loneliness and isolation.
						</p>
					</div>
					<div class="button">
						<a href="/" class="btn" type="button">
							<span class="btn__text">Home</span>
						</a>
					</div>
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
		background-image: linear-gradient(rgba(217, 214, 222, 0.85), rgb(51 83 67 / 85%)),
			url(../therapy.jpg);
		width: 110%;
		height: 200vh;
	}

	.hero-wrapper {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 90vh;
	}

	.hero-wrapper .hero {
		color: #ffffff;
	}

	/* h3 {
		text-shadow: 1px 1px 1px rgb(243, 247, 247), 2px 2px 1px rgb(27, 22, 22);
	} */
	p {
		font-size: 0.7rem;
		color: black;
		line-height: 1.6;
		font-weight: 900;
	}
	.typewritter {
		color: goldenrod;
		padding: 10px;
		padding-left: 20px;
		justify-content: center;
		margin-top: 700px;
	}

	.quotes {
		/* background-color: #989bea; */
		align-items: center;
		justify-content: left;
		margin-right: 400px;
		width: 500px;
		height: 230px;
		margin-left: 100px;
		margin-top: 20px;
		background-size: cover;
		background-position: center;
	}

	.books {
		justify-content: right;
		margin-left: 800px;
		margin-top: -250px;
		color: rgb(220, 226, 229);
		background-image: url('{myImage}');
		width: 400px;
		background-size: cover;
		background-position: center;
	}
	.one {
		color: rgb(18, 19, 18);
	}
	.button {
		display: inline-block;
		padding: 0.7rem 2rem;
		border: 0.2rem solid rgba(118, 188, 223, 0.85);
		font-size: 20px;
		border-radius: 2rem;
		background-color: rgba(136, 169, 230, 0.85);
		color: #ffffff;
		text-decoration: none;
		margin-top: 0px;
	}

	.button:hover {
		color: #ffffff;
		background-color: rgba(14, 226, 120, 0.85);
		transition-duration: 0.2s;
	}
	/* .extra {
		width: 200px;
		color: blue;
		font-weight: 500px;
		background-size: cover;
		background-position: center;
	} */
	h3 {
		color: rgb(30, 19, 24);
	}
	h2 {
		color: rgb(49, 44, 39);
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
