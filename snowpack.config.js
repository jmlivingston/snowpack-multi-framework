/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: '',
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-vue'],
}
