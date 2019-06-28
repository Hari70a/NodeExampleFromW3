var express = require('express');
var router = express.Router();

var app = express();

router.use(function (req, res, next) {
    console.log('A new request received at' + Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send("Mys first route!!");
});
router.get('/hello', function (req, res) {
    res.send("Hello World!");
});

router.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

router.get('/:id', function (req, res) {
    res.send('The id you specified is ' + req.params.id);
});

router.get('/:name/:id', function (req, res) {
    res.send('The name and id you specified is ' + req.params.name + " and " + req.params.id);
});

router.all('/test', function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});

router.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

module.exports = router;
