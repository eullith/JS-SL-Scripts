var myWindow = window.open("","Print","width=810,height=610, scrollbars=0, resizable=0, status=0");
var player=GetPlayer();
var uname=player.GetVar("Name");
var course=player.GetVar("CourseName");
const today = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var date = monthNames[today.getMonth()]+' '+today.getDate()+','+today.getFullYear(); 

var certificate = '' + 
'<html>' + 
'<head>' + 
'</head>' + 
'<style type=\'text/css\'>' + 
'    body {' + 
'        margin: 0;' + 
'        padding: 0;' + 
'        color: #FFFF;' + 
'        display: table;' + 
'        font-family: \'Articulate\', sans-serif;' + 
'        font-style: normal;' + 
'        font-size: 24px;' + 
'        text-align: center;' + 
'        position: absolute;' + 
'    }' + 
'' + 
'    #upper_left {' + 
'        position: relative;' + 
'        top: 0;' + 
'        left: 0;' + 
'    }' + 
'' + 
'    .container1 {' + 
'        width: 1285px;' + 
'        height: 991px;' + 
'    }' + 
'' + 
'    .course {' + 
'        font-style: normal;' + 
'        font-size: 30px;' + 
'        color: black;' + 
'        position: absolute;' + 
'        top: 69.5%;' + 
'        left: 50%;' + 
'        transform: translate(-50%, -50%);' + 
'    }' + 
'' + 
'    .date {' + 
'        font-style: normal;' + 
'        font-size: 25px;' + 
'        color: black;' + 
'        position: absolute;' + 
'        top: 81%;' + 
'        left: 25%;' + 
'        transform: translate(-50%, -50%);' + 
'    }' + 
'' + 
'    .name {' + 
'        font-style: normal;' + 
'        font-size: 50px;' + 
'        position: absolute;' + 
'        color: black;' + 
'        top: 52.5%;' + 
'        left: 50%;' + 
'        transform: translate(-50%, -50%);' + 
'    }' + 
'</style>' + 
'' + 
'<body>' + 
'    <div class="container1">' + 
'        <img id="upper_left" src="https://www.linkpicture.com/q/Certificate_2.png" type="image"' + 
'            style="width: 100%; height: 100%;">' + 
'        <div class="name" id="learner_name"> '+uname+' </div>' + 
'        <div class="course"> '+course+' </div>' + 
'        <div class="date"> '+date+' </div>' + 
'    </div>' + 
'</body>' + 
'';

myWindow.document.write(certificate);
myWindow.document.close();
myWindow.focus();
myWindow.print();