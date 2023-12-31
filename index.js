const express = require('express')
const app = express()
const port = 4000
const data = require('./dummy')
const cors = require('cors')
const bodyParser = require('body-parser');


// console.log(data)
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data',(req,res)=>{
    res.json(data.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
