var font;
var prompter;
var message = "";
var messageLength = 0;
var button;
var c;

function preload(){
    font = loadFont("GreenLights.otf");
    prompter = loadImage("ud prompter.jpg");
    button = Document.getElementById("button");
}

function setup(){
    c = createCanvas(500,500);
    c.parent("container");
}
  
function draw(){
    image(prompter, 0, 0, 500, 500);

    fill(240, 58, 58);
    textFont("GreenLights");
    textAlign(CENTER, CENTER);
    textSize(15);
    translate(265,230);
    angleMode(DEGREES);
    rotate(-1);
    text(message, 0, 0);
    
}

function screenshot() {
    console.log("!");
    saveCanvas(c, "UDPrompterImg", "jpg");
}

function keyPressed() {
    if (keyCode == 8) {
        message = message.slice(0, -1);
    }
 }

function keyTyped(){
    if (messageLength <= 5500){
        message = message + key;
    }
    
    for (x = 0; x < message.length; x++){
        messageLength = messageLength + textWidth(message[x]);
    }
}