/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // mount and buildOptions optional for deploying to GitHub Pages
  // mount: {
  //   public: '/',
  //   src: '/_dist_',
  // },
  // buildOptions: {
  //   baseUrl: '',
  // },
  buildOptions: {
    baseUrl: '/snowpack-multi-framework/',
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-vue'],
}
