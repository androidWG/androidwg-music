<script>
    import Button from "$lib/Button.svelte";

    export let compact = true;

    export let title = "";
    export let cover = "";
    export let releaseDate = undefined;
    export let links = []

    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }

    let releaseDateFormatted;
    if (releaseDate) {
        releaseDateFormatted = releaseDate.toLocaleDateString("en-US", options)
    }
</script>

<div class="album" class:compact>
    <a href="/{cover}">
        <img class="cover" src="/covers/{cover}.jpg" alt="'{title}' cover art">
    </a>
    <h3><b>{title}</b>
        {#if releaseDate}
            • {releaseDateFormatted}
        {/if}
    </h3>
    <div class="links" class:compact>
        {#each links as link}
            <Button compact="{compact}" name="{link.platform}" icon="{link.platform}" link="{link['link']}"></Button>
        {/each}
    </div>
</div>

<style>
    .album {
        margin: 32px auto 0;
        padding: 16px;
        border: solid #616161 1px;

        width: fit-content;
        font-size: 1.5em;
    }

    h3 {
        font-weight: 400;
        margin-bottom: 1em;
    }

    .cover {
        border: solid lightgray 2px;

        width: 100%;
        max-width: 420px;
    }

    .links {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;

        width: 100%;
        margin: 16px auto auto;
    }

    .compact {
        flex-direction: row;
        width: fit-content;

        font-size: 1em;
    }
</style>