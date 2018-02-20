const db = require('mongoose');

db.connect('mongodb://mike:crom@localhost:27017/customers')
.then(()=>{
    console.log('successfully connected to customers database')
    err => {
        console.log(err.message);
    }
});
module.exports = db;