<script>
    import Nav from "../components/nav.svelte";
</script>

<div class="p-8 container mx-auto">
    <Nav/>
    <slot></slot>
</div>


<style type="text/postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>