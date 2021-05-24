const express = require('express');
const cors = require('cors');
require('dotenv').config()
const _ = require('lodash');
const nunjucks = require('nunjucks');
const http = require('http');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const { PORT, DB_CON } = process.env;

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//db
const db = require('./db');

// session store
var store = new MongoDBStore({
    uri: `mongodb://${DB_CON}`,
    collection: 'sessions'
});

store.on('error', function (error) {
    console.log(error);
});

app.use(session({
    secret: 'session123',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        sameSite: false
    },
    store: store,
    resave: false,
    saveUninitialized: true
}));

const middileware = require('./common/middileware/middileware');

middileware(app)
// router
const router = require('./router/index');
router(app);

app.listen(PORT, () => {
    console.log(`server run on ${PORT}`)
});
