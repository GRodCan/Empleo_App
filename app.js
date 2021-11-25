const express = require('express');
const viewsRouter=require('./routes/views');
const apiSqlRouter=require('./routes/api');


const app = express()
const port = 3000

app.use(express.json())

app.use("/", viewsRouter)
app.use("/api",apiSqlRouter)

app.set('view engine', 'pug');
app.set('views','./views');

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  })

