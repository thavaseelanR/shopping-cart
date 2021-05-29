const express = require('express');
const cors = require('cors');
require('dotenv').config();
const nunjucks = require('nunjucks');
let cookieParser = require('cookie-parser');
let session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const middileware = require('./common/middileware/middileware');
const adminRouterApi = require('./router/admin-auth-router');

const { PORT, DB_CON, DOMAIN_NAME, SESSION_SECRET } = process.env;

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: ['http://admin.shoppingcart.com', 'http://ui.shoppingcart.com'],
    credentials: true,
    methods: ['GET', 'PUT', 'POST']
}));
app.enable('trust proxy');

//db
const db = require('./db');

// session store
let store = new MongoDBStore({
    uri: `mongodb://${DB_CON}`,
    collection: 'sessions'
});

store.on('error', function (error) {
    console.log(error);
});

app.use(session({
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        domain: DOMAIN_NAME,
        httpOnly: false,
        path: '/',
        secure: false
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));


app.set('view engine', 'nunjucks');
app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

var adminRouter = express.Router()

middileware(adminRouter);
adminRouterApi(adminRouter);

// mount the router on the app
app.use('/admin', adminRouter)


// var uiRouter = express.Router()

// middileware(adminRouter);
// adminRouterApi(adminRouter);

// // mount the router on the app
// app.use('/ui', adminRouter)

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(PORT, () => {
    console.log(`server run on ${PORT}`);
});
