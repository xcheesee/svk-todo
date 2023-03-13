<script>
    import "../app.css"
	import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />

</div>

<style>
    .app {
        display: grid;
        grid-template-rows: min-content 1fr min-content;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        display: contents;
    }
</style>
