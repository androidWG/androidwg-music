<script>
    export let compact = true;
    export let name = "";
    export let link = "";
    export let icon = "";

    function getIconUrl(name) {
        return new URL(`/src/lib/assets/icons/${name}.svg`, import.meta.url).href
    }

</script>

<a class="button" href="{link}" target="_blank" rel="noreferrer">
    {#if icon !== ""}
        <img class="icon" class:compact src="{getIconUrl(icon)}" alt="{name} icon">
    {:else}
        <p>{name}</p>
    {/if}

    {#if !compact}
        <p>{name}</p>
    {/if}
</a>

<style>
    .button {
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;

        border: solid white 1px;
        padding: 8px;

        text-decoration: none;
        color: white;
        font-family: monospace;
    }

    .icon {
        width: 32px;
        aspect-ratio: 1/1;
    }
    .compact {
        width: 24px;
    }

    p {
        margin: 0;
        font-size: 1em;
    }
</style>