require('dotenv').config();
const mongoose = require('mongoose');

const { DB_CON } = process.env;

mongoose.connect(`mongodb://${DB_CON}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB connected");
}).catch(err => {
    console.log('Error occurred while connecting', err);
});

var db = mongoose.connection;