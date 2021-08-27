var player = GetPlayer();
var email=player.GetVar("tomail");
var subject=player.GetVar("Name");
var f0=player.GetVar("Accomplishments");
var f2=player.GetVar("Characteristics");
var f3=player.GetVar("Skill");
var f4=player.GetVar("Emotion");


var mailto_link='mailto:'+email+'?subject='+subject+"’s Personal Brand"+'&body='+"An accomplishment I am proud of is:%0d%0A"+f0+"%0d%0A%0d%0A"+"I am:%0d%0A"+f2+"%0d%0A%0d%0A"+"I am:%0d%0A"+f3+"%0d%0A%0d%0A"+"I am:%0d%0A"+f4+"%0d%0A%0d%0A";

win=window.open(mailto_link,'emailWin');


var player = GetPlayer();
var email=player.GetVar("tomail");
var subject=player.GetVar("Name");
var f0=player.GetVar("Specific");
var f2=player.GetVar("Measure");
var f3=player.GetVar("Actionable");
var f4=player.GetVar("Realistic");
var f5=player.GetVar("Timely");

var mailto_link='mailto:'+email+'?subject='+subject+"’s S.M.A.R.T. Goal"+'&body='+"Specific:%0d%0A"+f0+"%0d%0A%0d%0A"+"Measurable:%0d%0A"+f2+"%0d%0A%0d%0A"+"Actionable:%0d%0A"+f3+"%0d%0A%0d%0A"+"Realistic:%0d%0A"+f4+"%0d%0A%0d%0A"+"Timely:%0d%0A"+f5+"%0d%0A%0d%0A";

win=window.open(mailto_link,'emailWin');

