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

router.get('/:id', (req, res)=>{
    Customer.findById(req.params.id)
    .then((customer)=>{
        res.json({
            message: 'found customer!',
            customer: customer
        });
    });
});
router.put('/:id', (req, res) =>{
    Customer.findOne({_id: req.params.id })
    .then((customer) => {
        customer.firstname = req.body.customer.firstname;
        customer.lastname = req.body.customer.lastname;
        customer.save().then((customer)=>{
            res.json({
                message: 'updated!',
                customer: customer
            });
        });
    });
});

router.delete('/:id', (req, res)=>{
    Customer.findByIdAndRemove(req.params.id)
    .then((customer)=>{
        res.json({
            message: 'Deleted!',
            customer: customer
        });
    });

});

module.exports = router;