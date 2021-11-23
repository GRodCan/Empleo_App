const express = require('express');
// const { route } = require('./routes/');
const productRouter=require('./routes/views')


const app = express()
const port = 3000

app.use("/", productRouter)

app.set('view engine', 'pug');
app.set('views','./views');

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })

