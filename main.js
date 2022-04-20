function setup (){
canvas=createCanvas(300,300);
canvas.center();
canvas.mouseReleased(Comprison);
background("White");
speech1=window.speechSynthesis;

}
function preload() {
    loadm=ml5.imageClassifier("DoodleNet");
}
function draw() {
    strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }

    
}
function clearcanvas1(){
    background("White");
}

function Comprison() {
    loadm.classify(canvas,gotresult);
}

function gotresult(error,results) {
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("show_oname").innerHTML="object-"+results[0].label;
        document.getElementById("show_aname").innerHTML="accuracy-"+Math.round(results[0].confidence*100)+"%";
        conversion1=new SpeechSynthesisUtterance(results[0].label);
        speech1.speak(conversion1);
    }
}