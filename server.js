const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;


//enable JSON parsing by bodyParser
app.use(bodyParser.json());
//enable PUT , DELETE, CORS
app.use((req, res, next) =>{
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST','PUT', 'DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');    
    next();
});

app.use('/api/customers', require('./routes/users'));

app.listen(port, ()=>{
    console.log('rocking and rolling at port ' + `${port}`)
})