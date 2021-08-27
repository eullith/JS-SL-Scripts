var player = GetPlayer();
var Bname=player.GetVar("Name");
var B1=player.GetVar("FullName");
var B2=player.GetVar("WorkObjective");
var B3=player.GetVar("Education");
var B4=player.GetVar("WorkExperience");
var B5=player.GetVar("Achievement");
var B6=player.GetVar("SkillsLanguages");
var B7=player.GetVar("References");
var B8=player.GetVar("Address");
var B9=player.GetVar("Phone");
var B11=player.GetVar("Email");
var B13=player.GetVar("HobbiesInterests");


var myvar = '<!DOCTYPE HTML>'+
'<html lang="en-US">'+
''+
'<head>'+
'    <meta charset="UTF-8">'+
'    <title></title>'+
''+
'    <link rel="stylesheet" href="style.css" />'+
'</head>'+
'<style>'+
'    .column1 {'+
'        float: left;'+
'        width: 30%;'+
'    }'+
''+
'    .column2 {'+
'        float: left;'+
'        width: 70%;'+
'    }'+
''+
'    .row:after {'+
'        display: table;'+
'        clear: both;'+
'    }'+
'</style>'+
''+
'<body style=width:650px;padding:20px;font-family:-apple-system,Open-Sans,sans-serif,serif;>'+
'    <div class="container left-col-block blocks">'+
'        <div class="row">'+
'            <div class="column1">'+
'                <h1>'+B1+'</h1>'+
'                <div class="Contact">'+
'                    <h4>Contact</h4>'+
'                    <div>'+B8+'</div>'+
'                    <div>'+B9+'</div>'+
'                    <div>'+B11+'</div>'+
'                </div>'+
'                <div class="Languages/Skills">'+
'                    <h4>Languages/Skills</h4>'+
'                    <div>'+B6+'</div>'+
'                </div>'+
'                <div class="Hobbies">'+
'                    <h4>Hobbies</h4>'+
'                    <div>'+B13+'</div>'+
'                </div>'+
'            </div>'+
'            <div class="column2">'+
'                <div class="content" role=main>'+
'                    <section id="objective">'+
'                        <h2 class="title">Work Objective</h2>'+
'                        <div class="description">'+
'                            <p>'+B2+'</p>'+
'                        </div>'+
'                    </section>'+
''+
'                    <section id="Education">'+
'                        <h2 class="title">Education</h2>'+
'                        <div class="description">'+
'                            <p>'+B3+'</p>'+
'                        </div>'+
'                    </section>'+
''+
'                    <section id="Work Experience">'+
'                        <h2 class="title">Work Experience</h2>'+
'                        <div class="description">'+
'                            <p>'+B4+'</p>'+
'                        </div>'+
'                    </section>'+
''+
'                    <section id="Achievements">'+
'                        <h2 class="title">Achievements</h2>'+
'                        <div class="description">'+
'                            <p>'+B5+'</p>'+
'                        </div>'+
'                    </section>'+
''+
'                    <section id="References">'+
'                        <h2 class="title">References</h2>'+
'                        <div class="description">'+
'                            <p>'+B7+'</p>'+
'                        </div>'+
'                    </section>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</body>'+
'</html>';

var myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
myWindow.document.write(myvar);
myWindow.print();


var mailto_link='mailto:'+email+'?subject='+subject+"’s S.M.A.R.T. Goal"+'&body='+"Specific:%0d%0A"+f0+"%0d%0A%0d%0A"+"Measurable:%0d%0A"+f2+"%0d%0A%0d%0A"+"Actionable:%0d%0A"+f3+"%0d%0A%0d%0A"+"Realistic:%0d%0A"+f4+"%0d%0A%0d%0A"+"Timely:%0d%0A"+f5+"%0d%0A%0d%0A";

win=window.open(mailto_link,'emailWin');

var mailto_link='mailto:'+email+'?subject='+subject+"’s Resume"+'&body='+"Address:%0d%0A"+B8+"%0d%0A%0d%0A"+"Phone:%0d%0A"+B9+"%0d%0A%0d%0A"+"Email:%0d%0A"+B11+"%0d%0A%0d%0A"+"Languages Skills:%0d%0A"+B6+"%0d%0A%0d%0A"+"Hobbies:%0d%0A"+B13+"%0d%0A%0d%0A"+"Work Objective:%0d%0A"+B2+"%0d%0A%0d%0A"+"Education:%0d%0A"+B3+"%0d%0A%0d%0A"+"Work Experience:%0d%0A"+B4+"%0d%0A%0d%0A"+"Achievements:%0d%0A"+B5+"%0d%0A%0d%0A"+"Reference:%0d%0A"+B7+"%0d%0A%0d%0A";

var player = GetPlayer();
var Bname=player.GetVar("Name");
var C1=player.GetVar("FullName");
var C2=player.GetVar("WorkObjective");
var C3=player.GetVar("Education");
var C4=player.GetVar("WorkExperience");
var C5=player.GetVar("Achievement");
var C6=player.GetVar("SkillsLanguages");
var C7=player.GetVar("References");
var C8=player.GetVar("Address");
var C9=player.GetVar("Phone");
var C11=player.GetVar("Email");
var C13=player.GetVar("HobbiesInterests");

var mailto_link='mailto:'+email+'?subject='+subject+"’s Resume"+'&body='+"Address:%0d%0A"+C8+"%0d%0A%0d%0A"+"Phone:%0d%0A"+C9+"%0d%0A%0d%0A"+"Email:%0d%0A"+C11+"%0d%0A%0d%0A"+"Languages Skills:%0d%0A"+C6+"%0d%0A%0d%0A"+"Hobbies:%0d%0A"+C13+"%0d%0A%0d%0A"+"Work Objective:%0d%0A"+C2+"%0d%0A%0d%0A"+"Education:%0d%0A"+C3+"%0d%0A%0d%0A"+"Work Experience:%0d%0A"+C4+"%0d%0A%0d%0A"+"Achievements:%0d%0A"+C5+"%0d%0A%0d%0A"+"Reference:%0d%0A"+C7+"%0d%0A%0d%0A";

win=window.open(mailto_link,'emailWin');