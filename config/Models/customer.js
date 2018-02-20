var db = require('../db');
var CustomerSchema = require('./customer-schema');

var Customer = db.model('Customer', CustomerSchema);

module.exports = Customer;