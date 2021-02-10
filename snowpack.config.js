/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  buildOptions: { baseUrl: '/snowpack-multi-framework' },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-vue'],
}
