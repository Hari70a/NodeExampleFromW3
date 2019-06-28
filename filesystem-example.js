var http = require('http');
var fs = require('fs');
var url = require('url')
var uc = require('upper-case')
var events = require('events');
var eventEmitter = new events.EventEmitter();

var formidable = require('formidable');
var nodemailer = require('nodemailer');
var mysql = require('mysql');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var express = require('express');
var app = express();


var things = require('./things.js');

app.use('/things', things)
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/first_template', function (req, res) {
    res.render('first_view');
});
app.get('/dynamic_view', function (req, res) {
    res.render('dynamic', {
        name: "TutorialsPoint",
        url: "http://www.tutorialspoint.com"
    });
});
//First middleware before response is sent
// app.use(function (req, res, next) {
//     console.log("Start"));
//     next();
// });

// //Route handler
// app.get('/', function (req, res, next) {
//     res.send("Middle");
//     next();
// });

// app.use('/', function (req, res) {
//     console.log('End');
// });

// Route handler that sends the response
// app.get('/things', function (req, res) {
//     res.send('Things');
// })

// app.get('/things/hello', function (req, res) {
//     res.send("You just called the get method at '/hello'!\n");
// });

app.listen(3000);
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
// dbo.createCollection("customers", function(err, res) {
//   if (err) throw err;
//   console.log("Collection created!");
//   db.close();
// });
// var myobj = { name: "Company Inc", address: "Highway 37" };
// dbo.collection("customers").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
// });

//insert multiple values
// var myobj = [
//     { name: 'John', address: 'Highway 71' },
//     { name: 'Peter', address: 'Lowstreet 4' },
//     { name: 'Amy', address: 'Apple st 652' },
//     { name: 'Hannah', address: 'Mountain 21' },
//     { name: 'Michael', address: 'Valley 345' },
//     { name: 'Sandy', address: 'Ocean blvd 2' },
//     { name: 'Betty', address: 'Green Grass 1' },
//     { name: 'Richard', address: 'Sky st 331' },
//     { name: 'Susan', address: 'One way 98' },
//     { name: 'Vicky', address: 'Yellow Garden 2' },
//     { name: 'Ben', address: 'Park Lane 38' },
//     { name: 'William', address: 'Central st 954' },
//     { name: 'Chuck', address: 'Main Road 989' },
//     { name: 'Viola', address: 'Sideway 1633' }
// ];
// dbo.collection("customers").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
// });

//insert with predefined id
// var myobj = [
//     { _id: 154, name: 'Chocolate Heaven' },
//     { _id: 155, name: 'Tasty Lemon' },
//     { _id: 156, name: 'Vanilla Dream' }
// ];
// dbo.collection("products").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
// });

// dbo.collection("customers").findOne({}, function (err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
// });

// dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
// });

// dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
// });
//var query = { address: "Park Lane 38" };
// var query = { address: /^S/ };
// dbo.collection("customers").find(query).toArray(function (err, result) {
// var mysort = { name: -1 };// descending
// var mysort={name: 1} //ascending
// dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
// var myquery = { address: 'Mountain 21' };
// dbo.collection("customers").deleteOne(myquery, function (err, obj) {

//     // var myquery = { address: /^O/ };
//     // dbo.collection("customers").deleteMany(myquery, function (err, obj) {
//     if (err) throw err;
//     // console.log(result);
//     console.log(obj.result.n + " document(s) deleted")
//     db.close();
// });

// dbo.collection("customers").drop(function (err, delOK) {
// dbo.dropCollection("customers", function (err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
// });

// var myquery = { address: "Canyon 123" };
// var newvalues = { $set: { name: "Mickey", address: "Canyon 1234" } };
// var myquery = { address: /^S/ };
// var newvalues = { $set: { name: "Minnie" } };
// dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
// dbo.collection("customers").find().limit(5).toArray(function (err, res) {
//     if (err) throw err;
//     // console.log("1 document updated");
//     // console.log(res.result.nModified + " document(s) updated");
//     console.log(res)
//     db.close();
// });
// var myVals = [
//     { _id: 1, product_id: 154, status: 1 }
// ]
// var myVals = [
//     { _id: 154, name: 'Chocolate Heaven' },
//     { _id: 155, name: 'Tasty Lemons' },
//     { _id: 156, name: 'Vanilla Dreams' }
// ]
// dbo.collection('products').insertMany(myVals, (function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
// }))
// dbo.collection('orders').aggregate([
//     {
//         $lookup:
//         {
//             from: 'products',
//             localField: 'product_id',
//             foreignField: '_id',
//             as: 'orderdetails'
//         }
//     }
// ]).toArray(function (err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
// });
//});

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password@12345",
//     database: "sampledb"
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// var sql = "CREATE TABLE customers (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), address VARCHAR(255))";
// var sql = "INSERT INTO customers (name, address) VALUES ('Spritle', 'Maduravoyal, chennai')";
// var sql = "INSERT INTO customers (name, address) VALUES ?";
// var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
// ];
//var sql ="ALTER TABLE `users` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY"
//var sql = "INSERT INTO customers (name, address) VALUES ('Ram', 'Kalasathamman  street 231')";
//var sql ="SELECT * FROM customers WHERE name LIKE 'H%'"
//var adr = 'Mountain 21';
//var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
//var sql = 'SELECT * FROM customers WHERE address = ?';
// var name = 'Amy';
// var adr = 'Mountain 21';
//var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
//var sql = "SELECT * FROM customers ORDER BY address DESC"
// var sql = "DELETE FROM customers WHERE name = 'Spritle'";
// var sql = "DROP TABLE customers";
// var sql = "DROP TABLE IF EXISTS customers";
//var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
// var sql = "DELETE FROM customers"
// var sql = "SELECT * FROM customers LIMIT 5"
// var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//var sql = "SELECT * FROM customers LIMIT 5,2";
//var sql = "SELECT users.name AS user, products.name AS favourite FROM users JOIN products ON users.favourite_product = products.id";
//     var sql = `SELECT users.name AS user,
//     products.name AS favourite
//     FROM users
//     RIGHT JOIN products ON users.favourite_product = products.id`;

//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         // console.log(result.affectedRows + " record(s) updated");
//         // console.log("Table created");
//         console.log(result);
//     });
// });

//Send mail using nodemailer
// var transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     auth: {
//         user: 'diligenthari@gmail.com',  
//         pass: ''
//     }
// });

// var mailOptions = {
//     from: 'diligenthari@gmail.com',
//     to: 'raja70a@gmail.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h6>Sending Html template using Nodemailer is easy</h6>'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });


//Create an event handler:
// var myEventHandler = function () {
//     console.log('I hear a scream!');
// }

// //Assign the eventhandler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// http.createServer(function (req, res) {
    // fs.readFile('demo-webpage.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // });
    //
    // fs.appendFile('sample-text.txt', 'Hello content1233!', function (err) {
    //     if (err) throw err;
    //     console.log('Append Saved!');
    // });
    // fs.open('mynewfile2.txt', 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('open Saved!');
    // });
    // fs.rename('mynewfile2.txt', 'myrenamedfile2.txt', function (err) {
    //     if (err) throw err;
    //     console.log('File Renamed!');
    // });

    // Upper case module
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(uc("Hello World!"));
    // res.end();
    //url modules
    // var q = url.parse(req.url, true);
    // var filename = "." + q.pathname;
    // console.log(filename, "filename%$$####");
    // fs.readFile(filename, function (err, data) {
    //     if (err) {
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         return res.end("404 Not Found");
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });




    //Creates a file named sample-text with content "Write file example" if
    // fs.writeFile('sample-text.txt', 'Write file example123', function (err) {
    //     if (err) throw err;
    //     console.log('New file Saved!');
    // });
    // fs.unlink('mynewfile2.txt', function (err) {
    //     console.log("INN unlink")
    //     if (err) throw err;
    //     console.log('File deleted!');
    // });

//     //file upload
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//             console.log(files, "files")
//             var oldpath = files.filetoupload.path;
//             var newpath = "/Users/manojkumar/Desktop/" + files.filetoupload.name;
//             console.log(newpath, "newpath####@")
//             fs.rename(oldpath, newpath, function (err) {
//                 if (err) throw err;
//                 res.write('File uploaded and moved!');
//                 res.end();
//             });
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(`<form action="fileupload" method="post" enctype="multipart/form-data"><input type="file" name="filetoupload"><br><input type="submit"></form>`);
//         // res.write('<input type="file" name="filetoupload"><br>');
//         // res.write('<input type="submit">');
//         // res.write('</form>');
//         return res.end();
//     }
// }).listen(8080);