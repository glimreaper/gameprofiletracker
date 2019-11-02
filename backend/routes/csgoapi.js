var express = require('express');
var router = express.Router();
var accountname = "";
var inputname = "";
var inputlink = "";
var inputtype = "";


router.post('/', function(req, res, next) {
	var myprofilenames = [];
	var friendprofilenames = [];
	var myprofilelinks = [];
	var friendprofilelinks = [];
	accountname = req.body.currentuser;
	inputname = req.body.inputname;
	inputlink = req.body.inputlink;
	inputtype = req.body.inputtype;
	console.log(accountname);
	console.log(inputname);
	console.log(inputlink);
	console.log(inputtype);
	var insertquery = "INSERT INTO csgolinks (accountname, playername, playerlink, playertype) VALUES (" + connection.escape(accountname)+"," + connection.escape(inputname)+","+connection.escape(inputlink)+","+connection.escape(inputtype)+")";
	connection.query(insertquery, function(err, result){
		if (err){
			console.error('sql error: ', err);
		}
		else{
			console.log("successfully inserted player profile link");
		}
	});

	var retrievequery = "SELECT playername, playerlink, playertype FROM csgolinks WHERE accountname = " + connection.escape(accountname);
	connection.query(retrievequery, function(err, result){
		if (err){
			console.error('sql error: ', err);
		}
		else{
			var i;
			for (i = 0; i < result.length; i++){
				if (result[i].playertype === 'personal' ){
					myprofilenames.push(result[i].playername);
					myprofilelinks.push(result[i].playerlink);
				}
				else{
					friendprofilenames.push(result[i].playername);
					friendprofilelinks.push(result[i].playerlink);
				}
			}
			res.json({
    			mypfnames:  JSON.stringify(myprofilenames),
    			friendpfnames: JSON.stringify(friendprofilenames),
    			mypflinks: JSON.stringify(myprofilelinks),
    			friendpflinks: JSON.stringify(friendprofilelinks)
    		});
		}
	});   
});

router.post('/loadpage', function(req, res, next) {
	var myprofilenames = [];
	var friendprofilenames = [];
	var myprofilelinks = [];
	var friendprofilelinks = [];
	accountname = req.body.currentuser;
    var retrievequery = "SELECT playername, playerlink, playertype FROM csgolinks WHERE accountname = " + connection.escape(accountname);
	connection.query(retrievequery, function(err, result){
		if (err){
			console.error('sql error: ', err);
		}
		else{
			var i;
			for (i = 0; i < result.length; i++){
				if (result[i].playertype === 'personal' ){
					myprofilenames.push(result[i].playername);
					myprofilelinks.push(result[i].playerlink);
				}
				else{
					friendprofilenames.push(result[i].playername);
					friendprofilelinks.push(result[i].playerlink);
				}
			}
			res.json({
    			mypfnames:  JSON.stringify(myprofilenames),
    			friendpfnames: JSON.stringify(friendprofilenames),
    			mypflinks: JSON.stringify(myprofilelinks),
    			friendpflinks: JSON.stringify(friendprofilelinks)
    		});
		}
	});
});

module.exports = router;