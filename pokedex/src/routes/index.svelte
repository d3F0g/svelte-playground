<script>
    // @ts-nocheck
    import {pokemons} from "../stores/pokestore"
    import Pokecard from "../components/pokecard.svelte"
    
    let searchTerm = ""
    let filteredPokemon = []
    // get the observable values only 
    $: {
        if (searchTerm) {
            filteredPokemon = $pokemons.filter(ele => ele.name.toLowerCase().includes(searchTerm.toLowerCase()))
        } else {
            filteredPokemon = [...$pokemons]
        }
    }
</script>

<svelte:head>
    <title>Svelte Vite Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Vite Pokedex</h1>

<input type="text" placeholder="Search Pokedex"
class="w-full rounded-md p-4 border-2" bind:value={searchTerm}>

<div class="grid gap-4 grid-cols-1 md:grid-cols-3 py-4">
    {#each filteredPokemon as pokemon}
        <!-- <p>{pokemon.name}</p> -->
        <Pokecard pokemonDetails={pokemon}/>
    {/each}
</div>