const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener(
    "DOMContentLoaded", () => {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
);

function random(number){
    return Math.floor(Math.random()*number);
}

function draw(){
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0; i < 100; i++){
        ctx.beginPath();
        if(i%3 == 0){
            ctx.fillStyle = "rgba(255,0,0,0.5)";
        }
        else if (i%2 ==0){
            ctx.fillStyle = "rgba(0,255,0,0.5)";
        }
        else{
            ctx.fillStyle = "rgba(0,0,255,0.5)";
        }
        let x = random(canvas.width);
        let y = random(canvas.height);
        ctx.arc(
            x,
            y,
            random(50),
            0,
            2*Math.PI,
        );
        ctx.fill();
        ctx.clearRect(canvas.width/2,canvas.height/2,canvas.width/5,canvas.height/5);
    }
}

btn.addEventListener("click",draw);