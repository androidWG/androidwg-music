<script>
    import Album from "$lib/Album.svelte";
    import Header from "$lib/Header.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    const newest = data.music[0];
    let music = [...data.music]
    music.shift()
</script>

<svelte:head>
    <title>androidwg music</title>
</svelte:head>

<Header></Header>

<div>
    <h2>newest release</h2>
    <Album title="{newest.title}" cover="{newest.filename}" releaseDate="{newest.date}" links="{newest.links}"></Album>
</div>

<div>
    <h2>the other stuff</h2>
    {#each music as m}
        <Album title="{m.title}" cover="{m.filename}" releaseDate="{m.date}" links="{m.links}"></Album>
    {/each}
</div>


<style>
    @media(max-width: 700px) {
        #links {
            flex-direction: column;
            gap: 8px;
        }

        #links > a {
            font-size: min(5vw, 1.5rem);
        }
    }
</style>