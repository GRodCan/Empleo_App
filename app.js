const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const viewsRouter=require('./routes/views');
const cors = require("cors");
const apiSqlRouter=require('./routes/apiSQL');
const apiMongoRouter = require('./routes/apiMongo');

const authPass = require('./utils/passport')

const app = express();
const port = 3000;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize());
app.use("/api",apiSqlRouter);
app.use("/api", apiMongoRouter);

app.use("/", viewsRouter);

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({
      message: "Node Cookie JWT Service"
  })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
