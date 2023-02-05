<script>
    import Button from "$lib/Button.svelte";

    export let title = "";
    export let cover = "";
    export let releaseDate = undefined;
    export let links = []

    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }
    let releaseDateFormatted = releaseDate.toLocaleDateString("en-US", options)
</script>

<div class="album">
    <a href="/{cover}">
        <img class="cover" src="/covers/{cover}.jpg" alt="'{title}' cover art">
    </a>
    <h3><b>{title}</b> • {releaseDateFormatted}</h3>
    <div class="links">
        {#each links as link}
            <Button name="{link.platform}" icon="{link.platform}" link="{link['link']}"></Button>
        {/each}
    </div>
</div>

<style>
    .album {
        margin: 32px auto 0;
        padding: 16px;
        border: solid #616161 1px;

        width: fit-content;
    }

    h3 {
        font-weight: 400;
        margin-bottom: 10px;
    }

    .cover {
        border: solid lightgray 2px;

        width: 100%;
        max-width: 420px;
    }

    .links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;

        width: fit-content;
        margin: 16px auto auto;
    }
</style>