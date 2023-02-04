<script>
    import Album from "$lib/Album.svelte";
    import icon from "$lib/assets/icon_white.svg"
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div id="header">
    <img id="icon" src="{icon}" alt="androidwg icon">
    <h1 id="title">androidwg</h1>
</div>

<div>
    <h2>newest release</h2>
    <Album title="C:\System32\media" cover="c-system32" releaseDate="Feb 4th, 2023"></Album>
</div>

<div>
    <h2>the other stuff</h2>
    {#each data.music as music}
        <Album title="{music['title']}" cover="{music['filename']}" releaseDate="{music['date']}"></Album>
    {/each}
</div>


<style>
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