var express = require('express');
var router = express.Router();
var username = "loggedout";
var success= "false";


router.post('/', function(req, res, next) {
	if (req.body.mode == "login"){
		console.log(req.body.inputname);
		console.log(req.body.inputpasswd);
		username= req.body.inputname;
		passwd= req.body.inputpasswd;
		var sqlquery = "SELECT password FROM users WHERE username = " +connection.escape(username);
		connection.query(sqlquery, function(err, result){
			if(err){
				console.error('sql error: ', err);
			}
			else{
				if (result.length > 0){
					console.log("logging in for user: " + username);
					if (result[0].password === passwd){
						success = "true";
					}
					res.json({
						currentuser: username,
						status: success
					});
				}
			}
		});
	}
	else{
		console.log("logging out");
		username = "loggedout";
		success = "false";
		res.json({
			currentuser: username,
			status: success
		});
	}
});

router.get('/', function(req, res, next){
	res.json({
		currentuser: username
	});
});


module.exports = router;