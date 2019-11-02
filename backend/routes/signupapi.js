var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
	console.log(req.body.inputname);
	console.log(req.body.inputemail);
	console.log(req.body.inputpasswd);
	var today = new Date().toISOString().slice(0, 19).replace('T', ' ');
	var user = {
		username: req.body.inputname,
		passwd: req.body.inputpasswd,
		email: req.body.inputemail,
		created: today,
		modified: today
	}
	var sqlquery = "INSERT INTO users (username, password, email, created, modified) VALUES ("+connection.escape(user.username)+","+connection.escape(user.passwd)+","+connection.escape(user.email)+","+connection.escape(user.created)+","+connection.escape(user.modified)+")";
	connection.query(sqlquery, function(err, result){
		if(err){
			console.error('sql error: ', err);
		}
		else{
			console.log("inserted info for user: " + req.body.inputname);
		}
	});
    res.send("successful signup for user: " + req.body.inputname);
});


module.exports = router;