<script lang="ts">
	export let form;
</script>

<h1>File submission form</h1>
<form method="post" enctype="multipart/form-data">
	<input type="file" name="file" />
	<button>Submit</button>
</form>
{#if form}
	<p>Received file</p>
	<ul>
		<li>Name: {form?.name}</li>
		<li>Length: {form?.length} bytes</li>
	</ul>
{/if}
