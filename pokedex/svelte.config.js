// import adapter from '@sveltejs/adapter-auto';
// import firebase from 'svelte-adapter-firebase'
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel()
	}
};

export default config;
