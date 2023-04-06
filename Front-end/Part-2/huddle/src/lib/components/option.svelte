<div class="greeting">
	<h2>Chooce your most comfortable way</h2>
	<div class="refer">
		<a href="/video" class="btn1" type="button">
			<span class="btn__text">Video Call</span>
			<br />
			<span class="sppm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi.</span>
		</a>
		<a href="/chat" class="btn2" type="button">
			<span class="btn__text">Chat</span>
			<br />
			<span class="sppm"
				>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quisquam!</span
			>
		</a>
	</div>
</div>

<style>
	.greeting h2 {
		font-size: 30px;
		color: #ffffff;
		text-align: center;
	}
	.greeting a {
		margin: 8px;
	}
	.greeting .btn1 {
		display: inline-block;
		padding: 0.7rem 2rem;
		border: 0.1rem solid rgba(50, 83, 67, 0.85);
		font-size: 20px;
		border-radius: 2rem;
		background-color: #a75d00;
		color: #ffffff;
		text-decoration: none;
	}

	.greeting .btn1:hover {
		color: #ffffff;
		border: 0.1rem solid #ffffff73;
		transition-duration: 0.2s;
	}
	.greeting .btn2 {
		display: inline-block;
		padding: 0.7rem 2rem;
		border: 0.1rem solid rgba(50, 83, 67, 0.85);
		font-size: 20px;
		border-radius: 2rem;
		background-color: #457777;
		color: #ffffff;
		text-decoration: none;
	}

	.greeting .btn2:hover {
		color: #ffffff;
		border: 0.1rem solid #ffffff73;
		transition-duration: 0.2s;
	}
	.refer {
		display: flex;
		justify-content: space-between;
	}
	.btn__text {
		font-size: 30px;
	}
	.sppm {
		font-size: 15px;
	}
</style>
