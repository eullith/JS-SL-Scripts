var player = GetPlayer();
var Bname=player.GetVar("Name");


var myvar = '<html>'+
'    <head>'+
'        <style type=\'text/css\'>'+
'            body, html {'+
'                margin: 0;'+
'                padding: 0;'+
'            }'+
'            body {'+
'                color: #004684;'+
'                display: table;'+
'                font-family: Georgia, serif;'+
'                font-size: 24px;'+
'                text-align: center;'+
'            }'+
'            .container {'+
'                border: 20px solid #FDB927;'+
'                width: 750px;'+
'                height: 563px;'+
'                display: table-cell;'+
'                vertical-align: middle;'+
'            }'+
'            .logo {'+
'                color: tan;'+
'            }'+
''+
'            .marquee {'+
'                color: #004684;'+
'                font-size: 48px;'+
'                margin: 20px;'+
'            }'+
'            .assignment {'+
'                margin: 20px;'+
'            }'+
'            .person {'+
'                border-bottom: 2px solid black;'+
'                font-size: 32px;'+
'                font-style: italic;'+
'                margin: 20px auto;'+
'                width: 400px;'+
'            }'+
'            .reason {'+
'                margin: 20px;'+
'            }'+
'        </style>'+
'    </head>'+
'    <body>'+
'        <div class="container">'+
'            <div class="logo">'+
'                <img src="logo-main-blue.png">'+
'            </div>'+
''+
'            <div class="marquee">'+
'                Certificate of Completion'+
'            </div>'+
''+
'            <div class="assignment">'+
'                This certificate is presented to'+
'            </div>'+
''+
'            <div class="person">'+
'                '+B1+''+
'            </div>'+
''+
'            <div class="reason">'+
'                For completing Module 1<br/>'+
'                Building Your Brand'+
'            </div>'+
'        </div>'+
'    </body>'+
'</html>';
	
var myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
myWindow.document.write(myvar);
myWindow.print();