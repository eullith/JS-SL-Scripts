var myWindow = window.open("","Print","width=810,height=610, scrollbars=0, resizable=0, status=0");
var player=GetPlayer();
var uname=player.GetVar("Name");
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(); 

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
'        font-family: \'Ubuntu\', sans-serif;' + 
'        font-style: normal;' + 
'        font-size: 24px;' + 
'        text-align: center;' + 
'        position: absolute;' + 
'    }' + 
'' + 
'    #upper_left {' + 
'	position: absolute;' + 
'	top: 0;' + 
'	left: 0;' + 
'    }' + 
'    #lower_left {' + 
'	position: absolute;' + 
'	bottom: 5%;' + 
'	left: 2%;' + 
'    }' + 
'    #lower_right {' + 
'	bottom: 0%;' + 
'	right: 0%;' + 
'	position: absolute;' + 
'    }  ' + 
'    .container1 {' + 
'        width: 1285px;' + 
'        height: 991px;' + 
'        color: #0A1439;' + 
'    }' + 
'' + 
'    .certify {' + 
'        padding-top: 180px;' + 
'        padding-bottom: 40px;' + 
'        font-size: 80px;' + 
'        font-weight: 600;' + 
'    }' + 
'' + 
'    .certify1 {' + 
'        padding-top: 10px;' + 
'        padding-bottom: 55px;' + 
'        font-size: 40px;' + 
'        font-weight: 400;' + 
'    }' + 
'' + 
'    .text {' + 
'        font-style: normal;' + 
'        font-size: 35px;' + 
'        padding-top: 10px;' + 
'        padding-bottom: 10px;' + 
'    }' + 
'' + 
'    .text2 {' + 
'        font-style: normal;' + 
'        font-size: 35px;' + 
'        padding-top: 30px;' + 
'        padding-bottom: 10px;' + 
'    }' + 
'' + 
'    .name {' + 
'        font-style: normal;' + 
'        font-size: 50px;' + 
'        padding-top: 40px;' + 
'        padding-bottom: 5px;' + 
'        font-weight: 600;' + 
'        border-bottom: 2px solid #0A1439;' + 
'        margin: 20px auto;' + 
'        width: 700px;' + 
'    }' + 
'</style>' + 
'<body>' + 
'    <div class="container1">' + 
'        <img id="upper_left" src="https://www.linkpicture.com/q/upper_left.png" type="image" style="width: 20%; height: 30%;">' + 
'        <img id="lower_right" src="https://www.linkpicture.com/q/lower_left.png" type="image" style="width: 30%; height: 50%;">' + 
'        <img id="lower_left" src="https://www.linkpicture.com/q/1973029.png" type="image" style="width: 20%; height: 45%;">' + 
'        <div class="certify">Certificate of Completion</div>' + 
'        <div class="text">THIS CERTIFIES THAT</div>' + 
'        <div class="name" id="learner_name"> '+uname+' </div>' + 
'        <div class="text2">Successfully completed</div>' + 
'        <div class="text" style="font-size: 60; font-weight: 600; padding-top: 40px !important;">Cyber' + 
'            Security and You!</div>' + 
'        <div class="text" style="padding-top: 30px;">Online Learning on</div>' + 
'            <div class="text"> '+date+' </div>'
'    </div>' + 
'</body>' + 
'</html>' + 
'';

myWindow.document.write(certificate);
myWindow.document.close();
myWindow.focus();
myWindow.print();