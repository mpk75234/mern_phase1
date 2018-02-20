const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;


//enable JSON parsing by bodyParser
app.use(bodyParser.json());

app.use('/api/customers', require('./routes/users'));

app.listen(port, ()=>{
    console.log('rocking and rolling at port ' + `${port}`)
})