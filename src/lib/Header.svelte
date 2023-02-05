<script>
    import icon from "$lib/assets/icon_white.svg"
</script>

<div id="header">
    <img id="icon" src="{icon}" alt="androidwg icon">
    <h1 id="title"><a href="/">androidwg</a></h1>
</div>

<div id="links">
    <a href="https://instagram.com/android.wg" target="_blank" rel="noreferrer">« instagram »</a>
    <a href="https://open.spotify.com/artist/3a9tneeFJxk0ag8UBmyRbL" target="_blank" rel="noreferrer">« spotify »</a>
    <a href="https://androidwg.bandcamp.com" target="_blank" rel="noreferrer">« bandcamp »</a>
    <a href="https://soundcloud.com/androidwg/tracks" target="_blank" rel="noreferrer">« soundcloud »</a>
</div>

<style>
    #icon {
        width: 12vw;
        max-width: 85px;
        aspect-ratio: 1/1;
    }

    #title {
        margin: 0;
        font-size: max(min(10vw, 6rem), 3.5rem);
        transform: translate(0, max(-1vw, -8px));
    }
    #title > a {
        text-decoration: none;
        color: white;
    }

    #header {
        display: flex;
        flex-direction: row;
        gap: 16px;

        width: fit-content;
        margin: auto;
        user-select: none;
    }

    #links {
        display: flex;
        gap: 16px;
        margin: 16px auto 32px;
        width: fit-content;
    }
    #links > a {
        font-size: min(3vw, 2rem);
        color: #f44708;
    }
</style>