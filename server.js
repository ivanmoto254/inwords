const express = require('express')
const app = express()
const PORT = 3000



app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started at port ${PORT}`)
})