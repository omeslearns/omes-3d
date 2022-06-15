// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter({
      // default options are shown
      pages: "docs",
      assets: "docs",
      fallback: "index.html",
      precompress: false
    }),
    trailingSlash: "always",
  }
};
