const express = require('express')
const app = express()
const port = 5042

app.get('/', (req, res) => {
  res.send('Hello World! \n I am Ben Sampson')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})