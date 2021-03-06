
var utterances = ["^yes$","^ya$","^si","indeed","affirmative",
	"^vg$","^sure$","^def$","^definitely$","^agreed$",
	"^roger$","^roger that$","^certainly$","^absolutely$",
	"^yep$","^yup$","^.+ right\\?$","^hm+","sweet$"];

var Botkit = require('botkit');

var controller = Botkit.slackbot();

var bot = controller.spawn({
	token: process.env.SLACK_TOKEN
});

var init = function() {

	bot.startRTM(function(err,bot,payload) {
	  if (err) {
	    throw new Error('Could not connect to Slack (' + err + ')');
	  }
	});

}

init();

controller.hears(utterances,["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  setTimeout(function () { 
	bot.reply(message,'Indeed.'); 
  },Math.trunc((Math.random() * 2000)) + 1000);
});

controller.on('rtm_close', function() {
  console.log('Disconnected from RTM');
  init();
});




