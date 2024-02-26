<script>
	import { onDestroy, onMount } from 'svelte';
	export let message = 'Hello there!';

	let timeout;

	onMount(() => {
		let snackbar = document.getElementById('snackbar');
		timeout = setTimeout(() => {
			snackbar.classList.toggle('show');
		}, 3000);
	});

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

<div id="snackbar" class="show">{message}</div>

<style>
	#snackbar {
		visibility: hidden;
		min-width: 250px;
		margin-left: -125px;
		background-color: var(--color-bg-0);
		color: var(--color-text);
		text-align: center;
		border-radius: 5px;
		padding: 16px;
		position: fixed;
		z-index: 1;
		left: 50%;
		bottom: 30px;
		font-size: 17px;
	}

	#snackbar.show {
		visibility: visible;
		animation:
			fadein 0.5s,
			fadeout 0.5s 2.5s;
	}

	@keyframes fadein {
		from {
			bottom: 0;
			opacity: 0;
		}
		to {
			bottom: 30px;
			opacity: 1;
		}
	}

	@keyframes fadeout {
		from {
			bottom: 30px;
			opacity: 1;
		}
		to {
			bottom: 0;
			opacity: 0;
		}
	}
</style>
