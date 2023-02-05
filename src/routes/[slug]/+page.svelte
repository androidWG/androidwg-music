<script>
    import Album from "$lib/Album.svelte";
    import Header from "$lib/Header.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    let release = data.release;
</script>

{@debug release}

<Header></Header>

<Album title="{release.title}" releaseDate="{release.date}" cover="{release.filename}" links="{release.links}"></Album>