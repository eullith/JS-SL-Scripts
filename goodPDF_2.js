var myWindow = window.open("", "Print", "width=810,height=610,scrollbars=1,resizable=1");
var player = GetPlayer();
var qty_S_Emotional = 87;
var qty_S_Social = 155;
var qty_S_Intellectual = 24;
var qty_S_Physical = 29;

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
	'    <div style=\'height:20px;padding:10px;text-align:center;\'>' +
	'        <button onclick=\'javascript:window.print();\'>Print My Notes</button>' +
	'    </div>' +
	'    <div style=\'text-align:center;\'><b><span style=\'color:red\'>If using Chrome browser:</b></span> Click “Print My' +
	'        Notes” button above to print. </div>' +
	'    <div style=\'margin-bottom:20px;text-align:center;\'><b><span style=\'color:red\'>If using Internet Explorer' +
	'                browser:</b></span> Right click on the screen below and choose “Print” to print. </div>' +
	'    <div style=\'font-size:25px;margin-top:10px;\'><b>Player\'s Edge</b></div>' +
	'    <div style=\'margin-top:10px;\'><b>Name: </b>' + name_ + '</div>' +
	'' +
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

myWindow.document.write(myHtmlStr);
