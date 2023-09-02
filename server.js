//third party components
let Express = require('express');
let BodyParser = require('body-parser');
let MethodOverride = require('method-override');
const cors = require('cors');
const morgan = require('morgan');

let App = Express();

//log by using morgan
App.use(morgan('combined'));
App.use(
    morgan('dev', {
        skip: function(req, res) {
            return res.statusCode < 400;
        }
    }),
);

// parse application/json
App.use(BodyParser.json({
    limit: '5mb'
}));

// parse application/vnd.api+json as json
App.use(BodyParser.json({
    type: 'application/vnd.api+json'
}));

// parse application/x-www-form-urlencoded
App.use(BodyParser.urlencoded({
    limit:'5mb',
    extended: true
}));

// override with the Z-HTTP-Method-Override header in the request. Simulate DELETE/PUT
App.use(MethodOverride('X-HTTP-Method-Override'));

// Support CORS from API
App.use(cors());

// Auth Middleware - This will check if the token is valid
// App.all('/api/v1/auth/*', [require('./app/middlewares/auth.middlewares')]);
// Routes
require('./app/route')(App); // configure our routes
// Create app
let server = require('http').createServer(App);

// Start app: http://IP_ADDRESS:port
server.listen(3000, function(err){
    if (err) console.log(err);
    console.log('API started listening on port %d', 3000);
});

// expose app
module.exports = App;