<script>
	import img1 from '$lib/image/therapist1.jpg';
	import img2 from '$lib/image/therapist2.jpg';
	import img3 from '$lib/image/therapist3.jpg';
	import img4 from '$lib/image/therapist4.jpg';

	let data = [
		{
			id: 1,
			url: img1,
			description: 'A beautiful landscape'
		},
		{
			id: 2,
			url: img2,
			description: 'A cute cat'
		},
		{
			id: 3,
			url: img3,
			description: 'A delicious pizza'
		},
		{
			id: 4,
			url: img4,
			description: 'A delicious pizza'
		}
	];

	let randomImage = '';

	let description = '';
	function getRandomImage() {
		const randomIndex = Math.floor(Math.random() * data.length);
		randomImage = data[randomIndex].url;
		description = data[randomIndex].description;
	}
	getRandomImage(); // Call the function on component mount to set initial image
	console.log(randomImage);
</script>

<div class="new-stl">
	<p>Suggested Therepist is ...</p>
</div>
<div class="sty-img">
	<img src={randomImage} alt={description} />
	<p>{description}</p>

</div>

<style>
	.sty-img {
		display: flex;
		margin-left: 30vw;
		margin-top: 10vh;
		width: 40vw;
		height: 50vh;
		border: 0.1rem solid rgba(50, 83, 67, 0.85);
	}
	.sty-img img {
		border: 0.1rem solid rgba(50, 83, 67, 0.85);
	}

</style>
