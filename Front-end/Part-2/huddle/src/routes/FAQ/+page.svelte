


	<title>Questions About Africa</title>
	<style>
        #title{
     text-align: center;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.02em;
    font-weight: 100;
    background-color: #FFFDD0;
    height: 10vh;
    padding: 30px;
        }
       		.container {
			max-width: 700px;
			margin: 0 auto;
			padding: 10px;
			background-color: white;
			border-radius: 5px;
			box-shadow: 0px 0px 5px 0px rgba(248, 245, 245, 0.75);
			transition: height 0.3s ease-out;
			overflow: hidden;
		}
		.question {
			margin-bottom: 10px;
			padding-bottom: 7px;
			border-bottom: 2px solid #ccc;
			cursor: pointer;
		}
		.question h4 {
			margin-top: 0;
			font-size: 20px;
		}
		.question p {
			margin-top: 0;
			font-size: 20px;
			display: none;
		}
		.question.active p {
			display: block;
		}
	</style>

<body>
    <div id="title">
        <h2>Frequently asked questions</h2>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fffdd0" fill-opacity="1" d="M0,192L60,192C120,192,240,192,360,160C480,128,600,64,720,64C840,64,960,128,1080,154.7C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    
	<div class="container">
		<div class="question">
			<h4>What is Tuzungumze?</h4>
			<p> We change the way student's approach their mental health and help them tackle
                life’s challenges by providing an accessible online platform where they get connected to the therapist 
                and get started with the therapy sessions</p>
		</div>
		<div class="question">
			<h4>How do I get started?</h4>
			<p>Once you have accessed our website  fill in the questionnaire that will help our system
                match you with the therapist. Proceed to creating an account once done you'll be matched with one of the school 
                therapist. Schedule time for the tharapy session, and  choose whether to held it via video call or chat. 
            </p>
		</div>
		<div class="question">
			<h4>Can I stay anonymous?</h4>
			<p>Yes, a user can create an account with anonymous username  but this is possible if he / she is a student from the University.
                This is a university platform and the services are offered to the students belonging to Dekut.
				Also the therapist will keep what you tell them confidential
            </p>
		</div>
        <div class="question">
			<h4>Does one pay for the therapy services?</h4>
			<p>NO, students are not required to pay. It is free to access the website and get started. This service is availbable 
                ti all the students belonging to Dekut and it is absolutely free.
            </p>
		</div>
		<div class="question">
			<h4>How long can I use Tuzungumze?</h4>
			<p>This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value
				 after just a few weeks, while others prefer to stick to the program for an extended period of time.
				This is completely up to you.</p>
		</div>
        <div class="question">
			<h4>How do live video sessions work?</h4>
			<p>You can also have a video session with your therapist where you see each other and talk with each other in a virtual
				 face-to-face setting (similar to Skype).<br>
				To talk with your therapist via video, you will need to schedule a time with your therapist and log in to your therapy room at that time. Your therapist will then prompt you to start the video session.
				 After you confirm, you will immediately begin video chatting with your therapist. </p>
		</div>
		<div class="question">
			<h4>How do live chat sessions work?</h4>
			<p>Once you are matched to a therapist, you and your therapist will get a therapy chat room which will be your personal and secured place to communicate.
				You wil start typing and chatting with your therapist and enjoy the "live" interaction that allows instant response and feedback from your therapist
				
			</p>
		</div>
		<div class="question">
			<h4>Is my data secured?</h4>
			<p>Yes it is. we quarantee you a safe platform and we don't intend to share any details that you have provide for us.
                This is a safe space.
            </p>
		</div>
	</div>

	<script>
		const questions = document.querySelectorAll('.question');

		questions.forEach((question) => {
			question.addEventListener('click', () => {
				question.classList.toggle('active');
				const answer = question.querySelector('p');
				if (answer.style.display === 'block') {
					answer.style.display = 'none';
					document.querySelector('.container').style.height = 'auto';
				} else {
					answer.style.display = 'block';
					document.querySelector('.container').style.height = 'auto';
				}
			});
		});
	</script>
</body>


