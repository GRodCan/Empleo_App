const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const viewsRouter=require('./routes/views');
const cors = require("cors");
const apiSqlRouter=require('./routes/apiSQL');
const apiMongoRouter = require('./routes/apiMongo');

// require('./utils/passport')

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

app.use(function(req, res, next) {
  res.status(401).render('errors');
   });


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
