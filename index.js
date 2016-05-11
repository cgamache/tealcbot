var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.SLACK_TOKEN
})
bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

controller.hears(["^yes$","^ya$","^si","indeed","affirmative","^vg$","^sure$","^def$","^definitely$","^agreed$","^roger$","^roger that$","^certainly$","^absolutely$",
"^yep$","^yup$","^.+, right\\?$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  bot.reply(message,'Indeed.');
});
