<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-pumn">
	<h1>About this app</h1>

	<div>
		<h3>Hey, I'm Wayne</h3>
		<p>Software Engineer located in the Indianapolis Area.</p>
	</div>
	<div>
		<h4>This app is the product of a code challenge for a job that I was interested in.</h4>
		<p>Requirements:</p>
		<ul>
			<li>Use your favourite framework: React, Angular, Vue, Express, Rails, etc</li>
			<li>Unsplash API.</li>
			<li>
				Grid of photos should preserve the aspect ratio of the photos it's displaying, meaning you
				shouldn't crop the image in any way.
			</li>
			<li>Design should be responsive to work in desktop and mobile</li>
			<li>Grid should work in both portrait and landscape orientations of the device.</li>
			<li>Grid should support pagination, i.e. you can scroll on grid of photos infinitely.</li>
			<li>
				When user taps on a photo on the grid it should show the photo in full screen with more
				information about the photo.
			</li>
			<li>
				Full screen mode should show ardivs on the left and right edges of the photo when user moves
				the mouse or touches the screen.
			</li>
			<li>
				When user clicks on the ardiv on a photo in full screen, it should show the the
				next/previous photo and preserve current photos location on the grid, so when she dismisses
				the full screen, grid of photos should contain the last photo she saw.
			</li>
		</ul>
	</div>
	<div>
		<h4>I overshot the goal a bit.</h4>
		<p>I tend to have fun building apps like this and get carried away.</p>
		<p>Extras:</p>
		<ul>
			<li>Ability to search Unsplash plections and/or a raw image search.</li>
			<li>User plections.</li>
			<li>Related plections.</li>
			<li>
				Use AWS{' '}
				<a href="https://github.com/suprsidr/unsplash-lambda" title="unsplash-lambda">
					Lambda
				</a>{' '}
				for my API
			</li>
			<li>
				Gave{' '}
				<a href="https://recoiljs.org/" title="Recoil.js"> Recoil.js </a>{' '}
				a try - a new way of managing state in React apps
			</li>
			<li>Theme switcher.</li>
			<li>Bought cats-or-dogs.app domain :)</li>
			<li>
				Hosted on{' '}
				<a href="https://www.netlify.com/" title="Netlify"> Netlify </a>
			</li>
		</ul>
		<p>
			Find the{' '}
			<a href="https://github.com/suprsidr/unsplash-gallery-svelte" title="unsplash-gallery-svelte">
				repo
			</a>{' '}
			on Github.
		</p>
	</div>
</div>
