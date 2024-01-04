<script>
  export let data;
  const {photo} = data
</script>

<h2>{ photo.description || photo.alt_description || "No description" }</h2>
<img src={photo.urls.small} alt={ photo.description || photo.alt_description || "No description" } />