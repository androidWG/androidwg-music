<script>
    import Album from "$lib/Album.svelte";
    import icon from "$lib/assets/icon_white.svg"

    /** @type {import('./$types').PageData} */
    export let data;

    const newest = data.music[0];
    let music = [...data.music]
    music.shift()
</script>

<div id="header">
    <img id="icon" src="{icon}" alt="androidwg icon">
    <h1 id="title">androidwg</h1>
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

    #icon {
        width: 56px;
    }

    #title {
        margin: 0;
        font-size: 3rem;
    }
</style>