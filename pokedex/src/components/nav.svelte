<script>
    let selected = 'home'
</script>

<nav class="flex justify-center w-full">
    <a class="mx-4 text-lg border-b-4  hover:border-b-rose-400 {selected==='home' ? 'border-b-rose-400' : 'border-b-gray-50' }" href="/" on:click="{()=> selected='home'}">Home</a>
    <a class="mx-4 text-lg border-b-4 hover:border-b-rose-400 {selected==='about' ? 'border-b-rose-400' : 'border-b-gray-50' }" href="/about" on:click="{()=> selected='about'}">About</a>
</nav>