<script>
    import {fade} from 'svelte/transition'
    export let pokemonDetails
</script>

<a
class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
href={`/pokemon/${pokemonDetails.id}`} transition:fade>
    <img src={pokemonDetails.image} alt={pokemonDetails.name}>
    <h2 class="capitalize">{pokemonDetails.id}. {pokemonDetails.name}</h2>
</a>
