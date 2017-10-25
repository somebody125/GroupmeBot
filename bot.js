var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSch = /^\/schedule/; botRegexSh = /^\/shrug/;
      botRegexWk = /^\/users/; botRegexCC = /^\/dn/; botRegexFM = /^\/forum/; botRegexStandings = /^\/standings/; 
      botRegexTrade = /^\/trades/; botRegex4th = /^\/4th/; botRegexBills = /^\/bills/; botRegexWk1 = /^\/week1/; botRegexWk2 = /^\/week2/;
      botRegexWk3 = /^\/week3/; botRegexWk4 = /^\/week4/; botRegexWk5 = /^\/week5/; botRegexWk6 = /^\/week6/; botRegexWk7 = /^\/week7/;
      botRegexWk8 = /^\/week8/; botRegexWk9 = /^\/week9/; botRegexWk10 = /^\/week10/; botRegexWk11 = /^\/week11/; botRegexWk12 = /^\/week12/; 
      botRegexWk13 = /^\/week13/; botRegexWk14 = /^\/week14/; botRegexWk15 = /^\/week15/; botRegexWk16 = /^\/week16/; botRegexWk17 = /^\/week17/; 
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MWO18/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/MWO18/rules");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MWO18/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/MWO18/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSch.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/MWO18/schedules");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MWO18/forum/topic/28916");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img3.etsystatic.com/004/1/6586066/il_fullxfull.382876059_g0w8.jpg");
    this.res.end();
  }
  else if(request.text && botRegexFM.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://genericmaddenleague.proboards.com/");
    this.res.end();
  }
  else if(request.text && botRegexStandings.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MWO18/standings");
    this.res.end();
  }
   else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://genericmaddenleague.proboards.com/board/7/trades-votes");
    this.res.end();
   }
  else if(request.text && botRegex4th.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/fr/cp0/e15/q65/21762469_100730794007422_3429882240250323740_o.jpg?efg=eyJpIjoidCJ9&oh=b8deff5e6b9ba3131c208bfe565994f2&oe=5A591F1F");
    this.res.end(); 
  }
  else if(request.text && botRegexBills.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/originals/86/17/b3/8617b31849eb39c59257e878533c9e1b.jpg");
    this.res.end();
  }
  else if(request.text && botRegexWk1.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  }
   else if(request.text && botRegexWk2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/iPVmPPS.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk3.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/LmRWMv6.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk4.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/teteDCL.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk5.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/DH0Ldur.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk6.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/anLut6E.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk7.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/VNfA6rk.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk8.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/Bn2qF9G.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk9.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/hJSCPLS.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk10.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/2rbqdUT.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk11.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/PSs2jHl.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk12.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/yKmTJHx.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk13.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/4APqnSU.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk14.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/MaISJth.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk15.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/H4aevEF.jpg");
    this.res.end();
  }
   else if(request.text && botRegexWk16.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  }
   else if(request.text && botRegexWk17.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
