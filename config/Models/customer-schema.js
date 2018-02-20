var db = require('../db');

var CustomerSchema = db.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true}
})

module.exports = CustomerSchema;