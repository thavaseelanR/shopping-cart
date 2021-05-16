var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var adminLoginSchema = new Schema({
    adminUserName: { type: String, required: true },
    adminPassword: { type: String},
    isDeleteUser: { type: Boolean, require: true }
});

// https://stackoverflow.com/questions/19474712/mongoose-and-multiple-database-in-single-node-js-project
// const myDB = mongoose.connection.useDb('myDB');
// const adminLoginSchemaExp = myDB.model('userInfo', adminLoginSchema);

module.exports = adminLoginSchema;