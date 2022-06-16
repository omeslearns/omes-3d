<script lang="ts">
	import { fly } from 'svelte/transition';

	let descriptionIndex = 0;
	let descriptionArr = [
		'Musician',
		'Ice Cream Enthusiast',
		'Mechanical Keyboard Geek',
		'Volleyballer',
		'Pescetarian',
		'Uncle',
		'Author'
	];

	setInterval(() => ++descriptionIndex, 1500);

	$: description = descriptionArr[descriptionIndex % descriptionArr.length];
</script>

<svelte:head>
	<title>Omes</title>
	<meta name="description" content="Omes' Homepage" />
</svelte:head>

<main class="p-20 md:p-32 lg:p-48">
	<header class="prose">
		<h2 class="">Omes Baltes</h2>
		<p>
			is a <span class="text-red-400">Computer Scientist</span> and
			{#key description}
				<p class="inline-block text-blue-400" in:fly={{ y: 50, duration: 500 }}>{description}</p>
			{/key}
			from Germany.
		</p>
	</header>

	<aside />

	<footer />
</main>
