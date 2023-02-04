<script>
    export let title = "";
    export let cover = "";
    export let releaseDate = "";
    export let links = []
</script>

<div class="album">
    <img class="cover" src="/covers/{cover}.jpg" alt="'{title}' cover art">
    <h3><b>{title}</b> • {releaseDate}</h3>
    <div class="links">
        {#each links as link}
            <a href="{link[0]}">{link[1]}</a>
        {/each}
    </div>
</div>

<style>
    h3 {
        font-weight: 400;
    }

    .cover {
        border-color: white;
        border-width: 2px;
        border-style: groove;

        width: 75vw;
        max-width: 400px;
    }
</style>