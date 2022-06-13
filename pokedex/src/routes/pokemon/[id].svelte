<script context="module">
    export async function load({ params, fetch }) {
        const id = params.id
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokemonData = await res.json()
        return {props: {pokemonData}}
    }
</script>

<script>
    export let pokemonData
    const type = pokemonData.types[0].type.name
</script>

<svelte:head>
    <title>{pokemonData.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokemonData.name}</h1>
    <p>Type: <strong>{type}</strong></p>
    <p>Height: <strong>{pokemonData.height}</strong></p>
    <p>Weight: <strong>{pokemonData.weight}</strong></p>
    <img class="my-4 h-40 w-40" src={pokemonData.sprites['front_default']} alt={pokemonData.name}>
</div>


