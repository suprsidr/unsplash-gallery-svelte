<script>
	import { onDestroy, onMount } from 'svelte';
	export let callback = () => console.log('IntersectionObserver callback');

	let options = {
		root: document.querySelector('.scroll-area'),
		rootMargin: '0px',
		threshold: 1.0
	};

	let target;

	const intersectionObserver = new IntersectionObserver((entries) => {
		// If intersectionRatio is 0, the target is out of view
		// and we do not need to do anything.
		if (entries[0].intersectionRatio <= 0) return;

		callback();
		console.log('Loaded new items');
	}, options);

	onMount(() => {
		setTimeout(() => {
			target = document.querySelector('#observer');
			intersectionObserver.observe(target);
		}, 1000);
	});
	onDestroy(() => {
		if (target) intersectionObserver.unobserve(target);
	});
</script>

<div id="observer">&nbsp;</div>
