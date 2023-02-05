<script>
    import Album from "$lib/Album.svelte";
    import Header from "$lib/Header.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    let release = data.release;
</script>

<Header></Header>

<Album compact="{false}" title="{release.title}" cover="{release.filename}" links="{release.links}"></Album>