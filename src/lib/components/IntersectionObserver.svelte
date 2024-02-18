<script>
	import { onDestroy, onMount } from 'svelte';
	export let callback = () => console.log('IntersectionObserver callback');

	let options = {
		root: document.querySelector('.scroll-area'),
		rootMargin: '0px',
		threshold: 1.0
	};

	const intersectionObserver = new IntersectionObserver((entries) => {
		// If intersectionRatio is 0, the target is out of view
		// and we do not need to do anything.
		if (entries[0].intersectionRatio <= 0) return;

		callback();
		console.log('Loaded new items');
	}, options);

	onMount(() => {
		setTimeout(() => {
			intersectionObserver.observe(document.querySelector('#observer'));
		}, 1000);
	});
	onDestroy(() => {
		intersectionObserver.unobserve(document.querySelector('#observer'));
	});
</script>

<div id="observer">&nbsp;</div>
