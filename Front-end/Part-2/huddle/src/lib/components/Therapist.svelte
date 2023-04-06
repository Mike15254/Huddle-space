<script>
	import img1 from '$image/Therapist1.jpg';
	import img2 from '$image/Therapist2.jpg';
	import img3 from '..image/Therapist3.jpg';

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

<img src={img1} alt="new" />
<img src={randomImage} alt={description} />
<p>{description}</p>
