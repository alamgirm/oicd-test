import vue from '@vitejs/plugin-vue'
const fs = require('fs')

export default {
  plugins: [vue()],
  https: {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
  },
  server: {
    https: true,
    port: 8443
  }
}
