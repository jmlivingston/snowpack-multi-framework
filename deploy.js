// Updates version and updated variables
const fs = require('fs')
const os = require('os')
const dotenv = require('dotenv')
let envConfig = dotenv.parse(fs.readFileSync('.env'))

envConfig.SNOWPACK_PUBLIC_VERSION =
  Number.parseFloat(envConfig.SNOWPACK_PUBLIC_VERSION) + 1

envConfig.SNOWPACK_PUBLIC_UPDATED = `${new Date().toDateString()}, ${new Date().toTimeString()}`

const newConfig = Object.entries(envConfig)
  .map(([key, value]) => `${key}=${value}`)
  .join(os.EOL)

fs.writeFileSync('.env', newConfig)
