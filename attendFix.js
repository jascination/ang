var cheerio = require('cheerio');
var request = require('request');
var melb = require('js/melb_attendees.json');

// Remote DB
// var databaseUrl = "mongodb://admin:balognom123@ds049878.mongolab.com:49878/attendahh"; // "username:password@example.com/mydb"

// Local DB
var databaseUrl = "mydb"

var collections = ["domains"]

var db = require("mongojs").connect(databaseUrl, collections, {
    auto_reconnect: true,
    'poolSize': 50
});

var ObjectId = require("mongojs").ObjectId;


function doList(list){
  for (var key in list){
    console.log(list);
  }
}


doList(melb);



function attendeeCheck(domains, bannedDoms){

  getAttendees('melb');
  getAttendees('syd');


  function getAttendees(metro){

  // Get Melbourne Data
    $.getJSON("/js/" + metro + ".json", function(json) {

      var clean = {};
      var counts = {};
      console.log(json);

      json.forEach(function(x) {

        //domain ref
        var eam = x["snap_attendee.email"],
            cwe = x["snap_attendee.title"],
            url = x["snap_attendee.cwe_url"],
            date = x["snap_attendee.starts_date"];

        // Find Fans

        counts[x['snap_attendee.email']] = (counts[x['snap_attendee.email']] || 0)+1; 




        var temp_dom = eam.split('@')[1];
          
          var badDom = 0;
          for (var x = 0; x<bannedDoms.length; x++){
            if(temp_dom == bannedDoms[x]){
              badDom = 1;
            }
            if(x === bannedDoms.length - 1){
              if(badDom === 0){
                
                if (!clean[temp_dom]){
                  clean[temp_dom] = {};
                }
                if(!clean[temp_dom][eam]){
                  clean[temp_dom][eam] = [{ cwe: cwe, date: date}];
                }else{
                  clean[temp_dom][eam].push({ cwe: cwe, date: date});
                }
              }
            }
          }
        });

      console.log("clean", clean);


  //! Then we sort them into an array from decending attendance

      var sortable = [];
      for (var email in counts){
        sortable.push([email, counts[email]])
      }
      sortable.sort(function(a, b) {return b[1] - a[1]})

      

      
      var temp_obj = {}
          temp_obj[metro + "_attendees"] = clean;
          temp_obj[metro + "_bigFans"] = sortable;
      
      console.log(metro + " Emails", temp_obj);
      
      console.log(metro + " Big Fans:", sortable);


      chrome.storage.local.set(temp_obj, function (result) {
        console.log("JSON variables stored for later!");
      });

      

    });
  }
}


function uniq_fast(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for(var i = 0; i < len; i++) {
       var item = a[i];
       if(seen[item] !== 1) {
             seen[item] = 1;
             out[j++] = item;
       }
  }
  return out;
}