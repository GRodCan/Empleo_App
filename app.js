const express = require('express');
require('dotenv').config();
const viewsRouter=require('./routes/views');
const cors = require("cors");
const apiSqlRouter=require('./routes/apiSQL');
const apiMongoRouter = require('./routes/apiMongo')



const app = express()
const port = 3000
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use("/", viewsRouter)

app.use("/api",apiSqlRouter)
app.use("/api", apiMongoRouter)



app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })



