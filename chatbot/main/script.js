var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+916363549133'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a>";

function startFunction() {
    setLastSeen();
    waitAndRespond("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
    document.getElementById("includedContent").innerHTML = "hi";
    $('#myBtn').show();
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndRespond(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndRespond(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name = "";
    if (inputText.toLowerCase().includes("my name is")) {
        name = inputText.substring(inputText.indexOf("is") + 2);
        if (name.toLowerCase().includes("rashmi")) {
            sendTextMessage("Ohh! That's my name too");
        }
        inputText = "input";
    }

    var intro = "Hello there, any queries?";
    var help = "<span class='sk'>Send Keyword to get what you want to know about me...<span class='bold'> skills, education, contact, projects or just clear</span> to clear conversation<br>";
    var skills = "<span class='sk'>I am currently pursuing Master's degree in Computer Science.<br><br>I can comfortably write code in:<br><span class='bold'>JavaScript, jQuery, React, HTML, CSS, SASS</span><br><br>";
    var education = "I am currently pusuing Master's degree in Computer Science Engineering at UNB, Fredericton<br><br>I have completed my Bachelor's from India.<br>"
    var about = "I am currently pusuing Master's degree in Computer Science Engineering at UNB, Fredericton<br><br>I have completed my Bachelor's from India.<br>";
    var projects = "You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/rashminmhtc'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>";
    var hi = "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br>";
    var website = "Alas, its a work in progress!";
    var github = "You can check my github here <a target='_blank' href='https://github.com/rashminmhtc'>Varshith Hegde</a>";
    var linkedin = "You can check my linkedin here <a target='_blank' href='https://www.linkedin.com/in/varshithvhegde'>Varshith Hegde</a>";

    var item = inputText.toLowerCase().trim();
            switch (true) {
    case /intro/.test(item):
        setTimeout(() => {
            sendTextMessage(intro);
        }, 2000);
        break;
    case /help/.test(item):
        sendTextMessage(help);
        break;
    case /skills/.test(item):
        sendTextMessage(skills);
        break;
    case /education/.test(item):
        sendTextMessage(education);
        break;
    case /clear/.test(item):
        clearChat();
        break;
    case /about/.test(item):
        sendTextMessage(about);
        break;
    case /contact/.test(item):
        sendTextMessage(contactString);
        break;
    case /projects/.test(item):
        sendTextMessage(projects);
        break;
    case /time/.test(item):
        var date = new Date();
        sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
        break;
    case /date/.test(item):
        var date = new Date();
        sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
        break;
    case "rashmi":
    case "rnm":
    case "h6xar":
        sendTextMessage("Yes, that's me");
        break;
    case /blog/.test(item):
    case /website/.test(item):
        sendTextMessage(website);
        break;
    case /github/.test(item):
        sendTextMessage(github);
        break;
    case /linkedin/.test(item):
        sendTextMessage(linkedin);
        break;
    case /friend/.test(item):
        sendTextMessage(website);
        break;
    case /input/.test(item):
        setTimeout(() => {
            sendTextMessage("Hello " + name + "! How are you?");
        }, 2000);
        break;
        
    case "hai":
    case "hello":
    case "hi":
    case "hey":
        sendTextMessage("Hello there 👋🏻");
        sendTextMessage(help);
        break;
    default:
        setTimeout(() => {
            sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
        }, 2000);
        break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndRespond('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


// function sendResponse() {
//     setTimeout(setLastSeen, 1000);
//     var date = new Date();
//     var myLI = document.createElement("li");
//     var myDiv = document.createElement("div");
//     var greendiv = document.createElement("div");
//     var dateLabel = document.createElement("label");
//     dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
//     myDiv.setAttribute("class", "received");
//     greendiv.setAttribute("class", "grey");
//     dateLabel.setAttribute("class", "dateLabel");
//     greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
//     myDiv.appendChild(greendiv);
//     myLI.appendChild(myDiv);
//     greendiv.appendChild(dateLabel);
//     document.getElementById("listUL").appendChild(myLI);
//     var s = document.getElementById("chatting");
//     s.scrollTop = s.scrollHeight;
//     playSound();
// }

function playSound() {
    audio.play();
}
