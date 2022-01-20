var player = GetPlayer();
var email=player.GetVar("tomail");
var subject=player.GetVar("Name");
var f0=player.GetVar("Accomplishments");
var f2=player.GetVar("Characteristics");
var f3=player.GetVar("Skill");
var f4=player.GetVar("Emotion");

var myHtmlStr = '<html><head>' +
'    <style>' +
'		 body { ' +
'        '+
'        }'+
'        table,' +
'        th,' +
'        td {' +
'            border: 1px solid black;' +
'            padding: 10px;' +
'        }' +
'' +
'        table {' +
'            border-spacing: 15px;' +
'			 border-collapse: collapse;' +
'            width: 100%;' +
'            padding: 10px;' +
'        }' +
'       caption {' +
'	        font-weight:bold;' +
'           font-size:large;' +
'           padding:10px;' +
'        }' +
'    </style></head>' +

'<body style=\'width:650px;padding:20px;font-family: Open Sans;\'>' +
'    <table>' +
'        <caption>Emotional Awareness</caption>' +
'        <tr>' +
'            <th>Question</th>' +
'            <th>Score</th>' +
'        </tr>'

for (let i = 1; i < qty_S_Emotional; i++) {
myHtmlStr = myHtmlStr + '<tr>' +
    '<td>' + player.GetVar("Q_" + i) + '</td>' +
    '<td>' + player.GetVar("S_Emotional_" + i) + '</td>' +
    '</tr>';
}
myHtmlStr = myHtmlStr + '</table><table>' +
'<caption>Social Interactions</caption>' +
' <tr>' +
' <th>Question</th>' +
' <th>Score</th>' +
' </tr>'

for (let i = 1; i < qty_S_Social; i++) {
myHtmlStr = myHtmlStr + '<tr>' +
    '<td>' + player.GetVar("Q_" + (i + 87)) + '</td>' +
    '<td>' + player.GetVar("S_Social_" + i) + '</td>' +
    '</tr>';
}
myHtmlStr = myHtmlStr + '</table><table>' +
'<caption>Intellectual Component</caption>' +
' <tr>' +
' <th>Question</th>' +
' <th>Score</th>' +
' </tr>'

for (i = 1; i < qty_S_Intellectual; i++) {
myHtmlStr = myHtmlStr + '<tr>' +
    '<td>' + player.GetVar("Q_" + (i + 242)) + '</td>' +
    '<td>' + player.GetVar("S_Intellectual_" + i) + '</td>' +
    '</tr>';
}
myHtmlStr = myHtmlStr + '</table><table>' +
'<caption>Physical Component</caption>' +
' <tr>' +
' <th>Question</th>' +
' <th>Score</th>' +
' </tr>'

for (i = 1; i < qty_S_Physical; i++) {
myHtmlStr = myHtmlStr + '<tr>' +
    '<td>' + player.GetVar("Q_" + (i + 266)) + '</td>' +
    '<td>' + player.GetVar("S_Physical_" + i) + '</td>' +
    '</tr>';
}
myHtmlStr = myHtmlStr + '</table>' +
'</body>' +
'' +
'</html>';

var mailto_link='mailto:'+email+'?subject='+subject+"’s Personal Brand"+'&body='+myHtmlStr+'';

win=window.open(mailto_link,'emailWin');

