var player = parent.GetPlayer();
        parent.window.surveyController = {
            pullData: function () {
                var Questions = [],
                    Scores = [],
                    htmlStr = "";

                for (var i = 1; i < 2; i++) {
                    Questions.push(player.GetVar("Q_" + i));
                }

                for (var i = 1; i < 6; i++) {
                    Scores.push(player.GetVar("S_" + i));
                }

                for (var i = 0; i < Questions.length; i++) {
                    htmlStr += "<tr><td>" + i + "</td><td style=\"text-align:left;\">" + Questions[i] + "</td><td style=\"text-align:left;\">" + Scores[i] +
                        "</td></tr>";
                }
                document.getElementById("results").innerHTML = htmlStr;
            },
            print : function(){
                window.print();
            }
        }

surveyController.pullData();
surveyController.print();