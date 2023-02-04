<script>
    import Album from "$lib/Album.svelte";
    import icon from "$lib/assets/icon_white.svg"

    /** @type {import('./$types').PageData} */
    export let data;

    const newest = data.music[0];
    let music = [...data.music]
    music.shift()
</script>

<svelte:head>
    <title>androidwg music</title>
</svelte:head>

<div id="header">
    <img id="icon" src="{icon}" alt="androidwg icon">
    <h1 id="title">androidwg</h1>
</div>

<div id="links">
    <a href="https://instagram.com/android.wg" target="_blank" rel="noreferrer">« instagram »</a>
    <a href="https://androidwg.bandcamp.com" target="_blank" rel="noreferrer">« bandcamp »</a>
    <a href="https://soundcloud.com/androidwg/tracks" target="_blank" rel="noreferrer">« soundcloud »</a>
</div>

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
    #icon {
        width: 12vw;
        max-width: 85px;
        aspect-ratio: 1/1;
    }

    #title {
        margin: 0;
        font-size: min(10vw, 6rem);
        transform: translate(0, max(-1vw, -8px));
    }

    h2 {
        margin-top: 16px;
        margin-bottom: 0;
    }

    #header {
        display: flex;
        flex-direction: row;        
        gap: 16px;

        width: fit-content;
        margin: auto;
    }

    #links {
        display: flex;
        gap: 16px;
        margin: 16px auto 32px;
        width: fit-content;
    }
    #links > a {
        font-size: x-large;
        color: #f44708;
    }
</style>