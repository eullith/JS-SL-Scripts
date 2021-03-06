var myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
var player=GetPlayer();
var name1=player.GetVar("Name");
var goal2=player.GetVar("Goals");
var notes3=player.GetVar("TextEntry5");
notes3 = notes3.replace(/\n/g, "<br>");
var contents = "<html><head></head><body style='width:650px;padding:20px;'>"
contents+="<div style='height:20px;padding:10px;text-align:center;'><button onclick='javascript:window.print();'>Print My Notes</button></div>";
contents+="<div style='text-align:center;'><b><span style='color:red'>If using Chrome browser:</b></span> Click “Print My Notes” button above to print. </div>";
contents+="<div style='margin-bottom:20px;text-align:center;'><b><span style='color:red'>If using Internet Explorer browser:</b></span> Right click on the screen below and choose “Print” to print. </div>";
contents+="<div style='font-size:25px;margin-top:10px;'><b>Information to take to Talking Talent Meeting</b></div>";
contents+="<div style='margin-top:10px;'><b>Employee Name:</b> "+name1+"</div>";
contents+="<div style='margin-top:10px;'><b>Talent Development Category:</b> "+goal2+"</div>";
contents+="<div style='margin-top:10px;'><b>Specific Development Actions:</b> "+notes3+"</div>";
contents+="<div style='margin-top:10px;'>It is expected that you share feedback from Talking Talent as well as the development ideas you generated above with "+name1+".</div>";
contents+="<div style='font-size:25px;margin-top:20px;'><b>What to Share After Talking Talent</b></div>";
contents+="<div style='margin-top:10px;'>Share this in a Check-in AFTER you confirm the talent development category and development ideas at your Talking Talent meeting/People Day.</div>";
contents+="<div style='margin-top:10px;'>Be sure to include the following points in the Check-in:</div>";
contents+="<div style='margin-left:15px;'><li>Explain that Talking Talent occurs and its relationship to employee development.</li></div>";
contents+="<div style='margin-left:15px;'><li>Share the feedback/development ideas and agree upon priorities for "+name1+"’s development.</li></div>";
contents+="<div style='font-style:italic;margin-left:40px;'>- Be sure to have "+name1+" create PDP development goals as appropriate.</div>";
contents+="<div style='margin-left:15px;'><li>Communicate how the development aligns with:</li></div>";
contents+="<div style='margin-left:50px;'>1.  Capabilities being built within the organization</div>";
contents+="<div style='margin-left:50px;'>2.  "+name1+"’s strengths/areas of opportunity</div>";
contents+="<div style='margin-left:50px;'>3.  "+name1+"’s career aspirations</div>";
contents+="<div style='margin-top:10px;'>View Talking Talent resources for more information on Feedback Check-in conversations.</div>";
contents+="<div style='margin-top:10px;'>As a reminder - we do not share succession plan nominations with employees.</div>";
contents+="<div style='font-size:25px;margin-top:20px;'><b>Key Roles in Development</b></div>";
contents+="<div style='margin-top:10px;'><b>Employees:</b> Drive their own development</div>";
contents+="<div><b>People Leaders:</b> Support employee development (e.g. through feedback, development ideas, etc.)</div>";
contents+="<div><b>Organization:</b> Provides opportunities for development in alignment with the capabilities the organization needs to win</div>";
contents+= "</body></html>"
myWindow.document.write(contents);