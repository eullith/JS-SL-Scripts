var myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
var player=GetPlayer();
var Name1=player.GetVar("Name");

function createVar(){
    var Emotional = [];

    for(i=1; i<=87; i++) {
        Emotional[i] = (player.GetVar("Q_" + i));
    }
}

var myvar = 'html>'+
''+
'<body style=\'width:650px;padding:20px;font-family: Cambria, Cochin, Georgia, Times;\'>'+
'    <div style=\'height:20px;padding:10px;text-align:center;\'>'+
'        <button onclick=\'javascript:window.print();\'>Print My Notes</button>'+
'    </div>";'+
'    <div style=\'text-align:center;\'><b><span style=\'color:red\'>If using Chrome browser:</b></span> Click “Print My'+
'        Notes” button above to print. </div>";'+
'    <div style=\'margin-bottom:20px;text-align:center;\'><b><span style=\'color:red\'>If using Internet Explorer'+
'                browser:</b></span> Right click on the screen below and choose “Print” to print. </div>";'+
'    <div style=\'font-size:25px;margin-top:10px;\'><b>Information to take to Talking Talent Meeting</b></div>";'+
''+
'    <div style=\'margin-top:10px;\'><b>Name:</b> "+Name+"</div>";'+
''+
'    <style>'+
'        table,'+
'        th,'+
'        td {'+
'            border: 1px solid black;'+
'            padding: 10px;'+
'        }'+
''+
'        table {'+
'            border-spacing: 15px;'+
'        }'+
'    </style>'+
''+
'    <table style="width:100%; border: 1px solid black; border-collapse: collapse;  padding: 10px; border-spacing: 15px;">'+
'        <caption style="font-weight: bold;font-size: large; padding: 10px;">Emotional Awareness</caption>'+
'        <tr>'+
'            <th>Question</th>'+
'            <th>Score</th>'+
'        </tr>'+
'        <tr>'+
'            <td>I am aware of what emotions I am experiencing</td>'+
            "<td>"+Emotional_1+"</td>" +
'        </tr>'+
'        <tr>'+
'            <td>I am uncomfortable with my emotions</td>'+
            "<td>"+Emotional_2+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am aware when my mood changes</td>'+
            "<td>"+Emotional_3+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am detached from my emotions</td>'+
            "<td>"+Emotional_4+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am aware of my internal thoughts</td>'+
"            <td>"+Emotional_5+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I don’t think before I feel or act</td>'+
"            <td>"+Emotional_6+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I engage in self-talk, also known as an internal dialogue</td>'+
"            <td>"+Emotional_7+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I understand what love is</td>'+
"            <td>"+Emotional_8+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I understand the difference between love and in love</td>'+
"            <td>"+Emotional_9+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Other people’s decisions shake me up</td>'+
"            <td>"+Emotional_10+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Other people have the power to make me upset</td>'+
"            <td>"+Emotional_11+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I understand that my thoughts affect my emotions</td>'+
"            <td>"+Emotional_12+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am aware of other people’s emotions</td>'+
"            <td>"+Emotional_13+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am uncomfortable when others show emotion around me</td>'+
"            <td>"+Emotional_14+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am able to put myself in someone else’s shoes and imagine what they are thinking and feeling</td>'+
"            <td>"+Emotional_15+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I feel compelled to help someone if they feel down or have a problem they are having trouble solving'+
'            </td>'+
"            <td>"+Emotional_16+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I sincerely care about others and their well-being </td>'+
"            <td>"+Emotional_17+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I often have negative thoughts and feelings throughout the day</td>'+
"            <td>"+Emotional_18+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I smile often throughout any given day</td>'+
"            <td>"+Emotional_19+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I identify more with a glass being “half-full” than a glass “half-empty”</td>'+
"            <td>"+Emotional_20+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Other people consider me an optimist</td>'+
"            <td>"+Emotional_21+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>My mood affects my actions in a negative way</td>'+
"            <td>"+Emotional_22+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I can adjust my mood to affect my actions in a positive way</td>'+
"            <td>"+Emotional_23+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am able to change my emotions to adapt to the situation</td>'+
"            <td>"+Emotional_24+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>In a crisis or chaotic situation, I am able to calm myself and focus on taking productive actions </td>'+
"            <td>"+Emotional_25+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I can tolerate high levels of uncertainty and ambiguity</td>'+
"           <td>"+Emotional_26+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am able to forgive myself when I make a mistake</td>'+
"            <td>"+Emotional_27+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I often replay negative thoughts or incidents in my head</td>'+
"            <td>"+Emotional_28+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>My mood is dependent on the outcome of situations</td>'+
"            <td>"+Emotional_29+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Other people’s actions affect my mood</td>'+
"            <td>"+Emotional_30+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Other people’s perception of me affects my mood</td>'+
"            <td>"+Emotional_31+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>My performance is better during practice than in competition</td>'+
"            <td>"+Emotional_32+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am able to stay focused and calm before a game or event that is important to me</td>'+
"            <td>"+Emotional_33+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>My body feels tense or I have stomach upset before competitive events </td>'+
"            <td>"+Emotional_34+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I run out of energy when performing physically because I am so nervous before a game</td>'+
"            <td>"+Emotional_35+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I can tune out distractions</td>'+
"            <td>"+Emotional_36+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am concerned with choking under pressure</td>'+
"            <td>"+Emotional_37+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I think too much about technique in my performance so I have trouble playing up to my potential </td>'+
"            <td>"+Emotional_38+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am worried about my results so I have difficulty staying in the moment </td>'+
"            <td>"+Emotional_39+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I feel anxious or nervous a lot of the time</td>'+
"            <td>"+Emotional_40+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I use alcohol/nicotine/caffeine/other substances to manage stress</td>'+
"            <td>"+Emotional_41+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I deny or ignore problems in the hope that they will go away</td>'+
"            <td>"+Emotional_42+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I feel fatigued or tired even when I get a good night’s sleep</td>'+
"            <td>"+Emotional_43+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I often feel tense in my neck, shoulders, and/or back </td>'+
"            <td>"+Emotional_44+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I love who I am</td>'+
"           <td>"+Emotional_45+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I care about my well being</td>'+
"            <td>"+Emotional_46+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I am confident and believe in myself</td>'+
"            <td>"+Emotional_47+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I respect myself</td>'+
"            <td>"+Emotional_48+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I often feel helpless and/or hopeless</td>'+
"            <td>"+Emotional_49+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I feel self-confident, appreciate myself, and have a healthy concept of who I am</td>'+
"            <td>"+Emotional_50+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I can accept love</td>'+
"            <td>"+Emotional_51+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I feel like I have love in my life</td>'+
"            <td>"+Emotional_52+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I feel like I am being myself with others</td>'+
"            <td>"+Emotional_53+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I change who I am around other people</td>'+
"            <td>"+Emotional_54+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>When I don’t get enough sleep I get moody</td>'+
"            <td>"+Emotional_55+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I have a hard time turning off my mind to get a full night’s sleep</td>'+
"            <td>"+Emotional_56+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Sleepiness interferes with my daily life</td>'+
"            <td>"+Emotional_57+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I typically sleep between 7-10 hours every night</td>'+
"            <td>"+Emotional_58+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I find myself snacking more when I am stressed than when I am calm</td>'+
"            <td>"+Emotional_59+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Food makes me feel better</td>'+
"            <td>"+Emotional_60+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I notice when/if the food I eat affects my mood</td>'+
"            <td>"+Emotional_61+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>Eating different foods make me feel differently</td>'+
"            <td>"+Emotional_62+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I enjoy eating healthy because it helps me to focus and perform better </td>'+
"            <td>"+Emotional_63+"</td>"+
'        <tr>'+
'            <td>I often make reactive decisions based on my mood</td>'+
"            <td>"+Emotional_64+"</td>"+
'        <tr>'+
'            <td>I am an impulsive person</td>'+
"            <td>"+Emotional_65+"</td>"+
'        <tr>'+
'        <td>I find myself making bad decisions regularly</td>'+
"        <td>"+Emotional_66+"</td>"+
'        </tr>'+
'        <td>I can let go of my emotions with ease</td>'+
"        <td>"+Emotional_67+"</td>"+
'        </tr>'+
'        <td>My emotions are out of my control</td>'+
"        <td>"+Emotional_68+"</td>"+
'        </tr>'+
'        <td>I am angry more than I would like to be</td>'+
"       <td>"+Emotional_69+"</td>"+
'        </tr>'+
'        <td>I am sad more than I would like to be</td>'+
"        <td>"+Emotional_70+"</td>"+
'        </tr>'+
'        <td>I am anxious more than I would like to be</td>'+
"        <td>"+Emotional_71+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I am having a mood swing while taking this test</td>'+
"        <td>"+Emotional_72+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I have the power to change my mood</td>'+
"        <td>"+Emotional_73+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I am comfortable asking others for help</td>'+
"        <td>"+Emotional_74+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I am comfortable expressing my emotions</td>'+
"        <td>"+Emotional_75+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I am able to talk about my feelings with others</td>'+
"        <td>"+Emotional_76+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I am comfortable when others show emotions around me</td>'+
"        <td>"+Emotional_77+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I am able to assert myself without being aggressive</td>'+
"        <td>"+Emotional_78+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>Others describe me as aggressive</td>'+
"        <td>"+Emotional_79+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I am able to control myself when I get angry</td>'+
"        <td>"+Emotional_80+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I “blow up” when I get angry or upset</td>'+
"        <td>"+Emotional_81+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I find myself holding and bottling up my emotions regularly</td>'+
"        <td>"+Emotional_82+"</td>"+
'        </tr>'+
'        </tr>'+
'        <td>I melt down when I am sad</td>'+
"        <td>"+Emotional_83+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>My emotional reactions match the circumstances that trigger them</td>'+
"            <td>"+Emotional_84+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>I have frequent highs and lows in my emotions throughout the day'+
'            </td>'+
"            <td>"+Emotional_85+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>My emotional reactions match the circumstances that trigger them'+
'            </td>'+
"            <td>"+Emotional_86+"</td>"+
'        </tr>'+
'        <tr>'+
'            <td>It is hard for me to tolerate disappointment and setbacks</td>'+
"            <td>"+Emotional_87+"</td>"+
'        </tr>'+
'    </table>'+
'</body>'+
''+
'</html>';
	
myWindow.document.write(myvar);


