var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var adminLoginSchema = new Schema({
    adminFirstName: { type: String, require: true },
    adminLastName: { type: String, require: true },
    adminUserName: { type: String, require: true },
    adminPassword: { type: String },
    adminRole: { type: String, require: true },
    date: { type: String, require: true },
    active: { type: String, require: true },
    isDeleteUser: { type: Boolean },
});

// https://stackoverflow.com/questions/19474712/mongoose-and-multiple-database-in-single-node-js-project
// const myDB = mongoose.connection.useDb('myDB');
// const adminLoginSchemaExp = myDB.model('userInfo', adminLoginSchema);

module.exports = adminLoginSchema;