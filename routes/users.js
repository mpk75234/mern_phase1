var router = require('express').Router();
var Customer = require('../config/Models/customer');

router.get('/', (req, res)=> {
    Customer.find({}, {__v:0})
    .then((customers)=>{
        res.json(customers);
    });
});
router.post('/', (req, res) => {
    var customer = new Customer({
        firstname: req.body.customer.firstname,
        lastname: req.body.customer.lastname
    });

    customer.save()
    .then(
        (newcustomer) =>{
            res.json({
                status: 200,
                customer: newcustomer,
                message: 'good work, customer successfully added'
            });
        },
        (err) =>{
            res.status(500).send(err.message);
        }
    );
});
module.exports = router;