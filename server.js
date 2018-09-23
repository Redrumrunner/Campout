var express = require('express');
var routes = require('./routes/index.js');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();
// =============================================
//  setup express application
// =============================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('/images'));


app.set('view engine', 'ejs');

// =============================================
//  setup routes
// =============================================
routes(app);
// =============================================
//  Start Server
// =============================================
app.listen(port, function(){
    console.log('Server is listening on port ' + port + '...');
});