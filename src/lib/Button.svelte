<script>
    export let name = "";
    export let link = "";
    export let icon = "";

    function getIconUrl(name) {
        return new URL(`/src/lib/assets/icons/${name}.svg`, import.meta.url).href
    }

</script>

<a href="{link}" target="_blank" rel="noreferrer">
    {#if icon !== ""}
        <img src="{getIconUrl(icon)}" alt="{name} icon">
    {:else}
        <p>{name}</p>
    {/if}
</a>

<style>
    img {
        width: 24px;
        aspect-ratio: 1/1;

        border: solid white 1px;
        padding: 8px;
    }
</style>