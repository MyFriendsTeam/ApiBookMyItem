const express  = require('express')
var bodyParser = require("body-parser");
const routesInfo = require('./app/routes/routes')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*',function (req,res,next)
{
    console.log(req.header("Authorization"));
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization ,Accept');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials',true);
    res.setHeader('Access-Control-Expose-Headers','Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    console.log(req.header("Authorization"));
    next();
});

var apiRoutes = require('./app/routes/routes');
app.use('/api', apiRoutes);

app.listen(7800, () => console.log('Example app listening on port 7800!'))