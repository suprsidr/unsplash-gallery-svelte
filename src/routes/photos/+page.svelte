<script>
	export let data;
  console.log(data);
</script>
<div class="container">
	{#each data.photos as photoItem}
		<div><a href={`/photos/${photoItem.slug}`}><img src={photoItem.urls.small} alt={ photoItem.description || photoItem.alt_description || "No description" } /></a></div>
	{/each}
</div>

<style>
  .container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: masonry;
  }
  .container img {
    max-width: 100%;
    border-radius: 5px;
    object-fit: contain;
  }
</style>