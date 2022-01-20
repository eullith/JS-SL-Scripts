var myWindow = window.open("","Print","width=810,height=610, scrollbars=0, resizable=0, status=0");
var player=GetPlayer();
var uname=player.GetVar("newName");

var myHtmlStr = '<html><head>' + 
'</head>' + 
'<style type=\'text/css\'>' + 
'    html,' + 
'    body {' + 
'        width: 210mm;' + 
'        height: 297mm;' + 
'    }' + 
'' + 
'    body,' + 
'    html {' + 
'        margin: 0 !important;' + 
'        padding: 0;' +
'        height:100%;' +
'        padding: 0 !important;'+
'        overflow: hidden;+ '  +  
'    }' + 
'' + 
'    body {' + 
'        color: #FFFF;' + 
'        display: table;' + 
'        font-family: \'Open Sans\', sans-serif;' + 
'        font-style: normal;' + 
'        font-size: 24px;' + 
'        text-align: center;' + 
'        position: absolute;' + 
'    }' + 
'' + 
'    .container1 {' + 
'        width: 1285px;' + 
'        height: 889px;' + 
'        border: 30px solid #004684;' + 
'        background-color: white;' + 
'        color: #004684;' + 
'    }' + 
'' + 
'    .container2 {' + 
'        width: 1275px;' + 
'        height: 799px;' + 
'        padding-top: 80px;' + 
'        border: 5px solid #FDB927;' + 
'    }' + 
'' + 
'    .certify {' + 
'        padding-top: 10px;' + 
'        font-size: 70px;' + 
'        font-weight: 600;' + 
'    }' + 
'' + 
'    .logo {' + 
'        align-self: center;' + 
'        padding-top: 70px;' + 
'        padding-bottom: 50px;' + 
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
'        padding-bottom: 10px;' + 
'        font-weight: 600;' + 
'        border-bottom: 2px solid #FDB927;' + 
'        margin: 20px auto;' + 
'        width: 700px;' + 
'    }' + 
'</style>' + 
'' + 
'<body>' + 
'    <div class="container1">' + 
'        <div class="container2">' + 
'            <div class="logo">' + 
'                <img src="https://i.ibb.co/PDZ40cQ/Logo.png" alt="Logo" style="border:0">' + 
'            </div>' + 
'            <div class="certify">Certificate of Completion</div>' + 
'            <div class="text">This certificate certifies that</div>' + 
'            <div class="name" id="learner_name"> ' + uname + '</div>' + 
'            <div class="text2">has successfully completed the<span style="font-weight: 600; "> Responsibility and Time Management</span>' + 
'                </div>' + 
'            <div class="text"> module from the Youre Hired! If Your Soft Skills Work Program</div>' + 
'        </div>' + 
'    </div>' + 
'</body>' + 
'' + 
'</html>' + 
'';

myWindow.document.write(myHtmlStr);
myWindow.document.close();
myWindow.focus();
myWindow.print();


////////// NPI Certificate ///////////

var myWindow = window.open("","Print","width=810,height=610, scrollbars=0, resizable=0, status=0");
var player=GetPlayer();
var uname=player.GetVar("Name");

var myHtmlStr = '' + 
'<html>' + 
'' + 
'<head>' + 
'</head>' + 
'<style type=\'text/css\'>' + 
'    html,' + 
'    body {' + 
'        width: 210mm;' + 
'        height: 297mm;' + 
'    }' + 
'' + 
'    body,' + 
'    html {' + 
'        margin: 0;' + 
'        padding: 0;' + 
'    }' + 
'' + 
'    body {' + 
'        color: #FFFF;' + 
'        display: table;' + 
'        font-family: \'Open Sans\', sans-serif;' + 
'        font-style: normal;' + 
'        font-size: 24px;' + 
'        text-align: center;' + 
'        position: absolute;' + 
'    }' + 
'' + 
'    .container1 {' + 
'        width: 1285px;' + 
'        height: 891px;' + 
'        border: 30px solid #2571BB;' + 
'        background-color: white;' + 
'        color: #2571BB;' + 
'    }' + 
'' + 
'    .container2 {' + 
'        width: 1255px;' + 
'        height: 821px;' + 
'        padding-top: 40px;' + 
'        border: 15px solid #79B522;' + 
'    }' + 
'' + 
'    .certify {' + 
'        padding-top: 10px;' + 
'        font-size: 70px;' + 
'        font-weight: 600;' + 
'    }' + 
'' + 
'    .logo {' + 
'        align-self: center;' + 
'        padding-top: 0px;' + 
'        padding-bottom: 40px;' + 
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
'        padding-bottom: 10px;' + 
'        font-weight: 600;' + 
'        border-bottom: 2px solid #79B522;' + 
'        margin: 20px auto;' + 
'        width: 700px;' + 
'    }' + 
'</style>' + 
'' + 
'<body>' + 
'    <div class="container1">' + 
'        <div class="container2">' + 
'            <div class="logo">' + 
'                <img src="https://i.ibb.co/sVqn2bY/cropped-WRHSAC-Logo-second-png.png"' + 
'                    alt="cropped-WRHSAC-Logo-second-png" style="border:0; width: 400px;"></a>' + 
'            </div>' + 
'            <div class="certify">Certificate of Completion</div>' + 
'            <div class="text">This certificate certifies that</div>' + 
'            <div class="name" id="learner_name"> ' + newName + ' </div>' + 
'            <div class="text2">has successfully completed the eLearning module on the</div>' + 
'            <div class="text" style="font-weight: 600; padding-top: 0px !important;">Non-Pharmaceuticals Quick Implementation Guide</div>' + 
'        </div>' + 
'    </div>' + 
'</body>' + 
'' + 
'</html>' + 
'';

myWindow.document.write(myHtmlStr);
myWindow.document.close();
myWindow.focus();
myWindow.print();