var player = GetPlayer();
var Bname=player.GetVar("Name");
var B1=player.GetVar("Accomplishments");
var B2=player.GetVar("Characteristic");
var B3=player.GetVar("Skill");
var B4=player.GetVar("Emotion");

var contents = "<html><head></head><body style='width:650px;padding:20px;'>";

contents+="<p style='font-size:24px;font-weight:bold;'>"+Bname+"’s Personal Brand</p>";

//B1
contents+="<h style='font-size:16px;font-weight:bold;'>"+"An accomplishment I am proud of is:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B1+"</p>";

//B2
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Characteristic:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B2+"</p>";

//B3
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Skill:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B3+"</p>";

//B4
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Emotion:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B4+"</p>";

contents+= "</body></html>";
var myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
myWindow.document.write(contents);
myWindow.print();

var player = GetPlayer();
var Bname=player.GetVar("Name");
var B1=player.GetVar("Specific");
var B2=player.GetVar("Measure");
var B3=player.GetVar("Action");
var B4=player.GetVar("Realistic");
var B5=player.GetVar("Timely");

var contents = "<html><head></head><body style='width:650px;padding:20px;'>";

contents+="<p style='font-size:24px;font-weight:bold;'>"+Bname+"’s S.M.A.R.T. Goal</p>";

//B1
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Specific:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B1+"</p>";

//B2
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Measurable:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B2+"</p>";

//B3
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Actionable:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B3+"</p>";

//B4
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Realistic:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B4+"</p>";

//B5
contents+="<h style='font-size:16px;font-weight:bold;'>"+"Timely:"+"</h>"
contents+="<p style='font-size:16px;font-weight:'>"+B5+"</p>";

contents+= "</body></html>";
var myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
myWindow.document.write(contents);
myWindow.print();