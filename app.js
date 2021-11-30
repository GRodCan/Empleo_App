const express = require('express');
require('dotenv').config()

const viewsRouter=require('./routes/views');
const apiSqlRouter=require('./routes/api');


const app = express()
const port = 3000
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", viewsRouter)
app.use("/api",apiSqlRouter)


app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })

