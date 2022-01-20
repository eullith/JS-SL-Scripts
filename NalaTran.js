var myWindow = window.open("", "Print", "width=810,height=610,scrollbars=1,resizable=1");
var player = GetPlayer();
var b1 = player.GetVar("bio1");
var b2 = player.GetVar("bio2");
var b3 = player.GetVar("bio3");
var b4 = player.GetVar("bio4");
var p1 = player.GetVar("psy1");
var p2 = player.GetVar("psy2");
var p3 = player.GetVar("psy3");
var p4 = player.GetVar("psy4");
var s1 = player.GetVar("soc1");
var s2 = player.GetVar("soc2");
var s3 = player.GetVar("soc3");
var s4 = player.GetVar("soc4");

var myHtmlStr = '' + 
'<body style="width:650px;padding:20px;font-family: Lato, Cochin, Georgia, Times;">' + 
'    <div style="height:20px;padding:10px;text-align:center;">' + 
'<style>' + 
'    table,' + 
'    th,' + 
'    td {' + 
'        border: 1px solid grey;' + 
'' + 
'        padding: 10px;' + 
'    }' + 
'' + 
'    th {' + 
'        color: white;' + 
'        background-color: #01505A;' + 
'    }' + 
'    table {' + 
'        border-spacing: 15px;' + 
'    }' + 
'</style>' + 
'' + 
'<table style="width:100%; border: 1px solid black; border-collapse: collapse;  padding: 10px; border-spacing: 15px;">' + 
'<caption style="font-weight: bold;font-size: large; padding: 10px; color: black;">Assignment Week 1:</caption>' + 
'<tr>' + 
'    <th></th>' + 
'    <th>Biological</th>' + 
'    <th>Psychological</th>' + 
'    <th>Social</th>' + 
'</tr>' + 
'<tr>' + 
'    <td></td>' + 
'    <td>Genetics, drugs, medical conditions, pain, sleep quality, nutrition, pregnancy</td>' + 
'    <td>Personality, coping strategies, defense mechanisms</td>' + 
'    <td>Living situation, finances, support, education, culture, religion</td>' + 
'</tr>' + 
'<tr>' + 
'    <td>Predisposing: What predisposes the patient to illness?</td>' + 
'    <td>'+ b1 +'</td>' + 
'    <td>'+ p1 +'</td>' + 
'    <td>'+ s1 +'</td>' + 
'</tr>' + 
'<tr>' + 
'    <td>Precipitating: What precipitated this episode?</td>' + 
'    <td>'+ b2 +'</td>' + 
'    <td>'+ p2 +'</td>' + 
'    <td>'+ s2 +'</td>' + 
'</tr>' + 
'<tr>' + 
'    <td>Perpetuating: What is perpetuating or prolonging this illness episode?</td>' + 
'    <td>'+ b3 +'</td>' + 
'    <td>'+ p3 +'</td>' + 
'    <td>'+ s3 +'</td>' + 
'</tr>' + 
'<tr>' + 
'    <td>Protecting: What are the protective factors?</td>' + 
'    <td>'+ b4 +'</td>' + 
'    <td>'+ p4 +'</td>' + 
'    <td>'+ s4 +'</td>' + 
'</tr>' + 
'';


myWindow.document.write(myHtmlStr);
myWindow.document.close();
myWindow.focus();
myWindow.print();