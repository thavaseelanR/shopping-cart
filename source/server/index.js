const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const session = require('express-session')
const _ = require('lodash');
const nunjucks = require('nunjucks');
const http = require('http');
const cookieParser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//db
const db = require('./db');

// router
const router = require('./router/index');
router(app);

const { PORT, DB_CON } = process.env;
// session store
const store = new MongoDBStore({
    uri: `mongodb://${DB_CON}`,
    collection: 'sessions'
});


app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    store: store,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    cookie: { maxAge: 60000 }
}));

app.listen(PORT, () => {
    console.log(`server run on ${PORT}`)
})
