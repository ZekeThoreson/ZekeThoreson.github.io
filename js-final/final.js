const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball{
    constructor(x,y,velX,velY,color,size,number){
        this.x = x;
        this.y = y;   
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.number = number
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.fill(); 

        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.number, this.x, this.y);
    }

    update(){
        // handles right edge
        if((this.x + this.size) >= width){
            this.velX = -(this.velX);
        }
        // left edge
        if((this.x - this.size) <= 0){
            this.velX = -(this.velX);
        }
        // bottom edge
        if((this.y + this.size) >= height){
            this.velY = -(this.velY);
        }
        // top edge
        if((this.y - this.size) <= 0){
            this.velY = -(this.velY); 
        }
        
        this.x += this.velX;
        this.y += this.velY;
    }
}


const balls = [];
let num = 0;
function addBalls(){
    while(balls.length < 10){
        const size = 30
        const ball = new Ball( 
            random(0+size,width-size),
            random(0+size,height-size),
            random(-7,7),
            random(-7,7),
            randomRGB(), 
            size,
            num
        );
        num++;
        balls.push(ball);
        console.log(ball);
    }
}

function deleteBall(ball){
    ball.x = 0;
    ball.y = 0;
    ball.velX = velX;
    ball.velY = velY;
    ball.color = color;
    ball.size = size;
    ball.number = number
}

function deleteBalls(){
    for (let i = 0; i < 10; i++){
        deleteBall(balls[i]);
    }
}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (const ball of balls) {
        const dx = x - ball.x;
        const dy = y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ball.size) {
            displayNumber(ball.number);
            break;
        }
    }
});

canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    let isOverBall = false;

    for (const ball of balls) {
        const dx = x - ball.x;
        const dy = y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ball.size) {
            isOverBall = true;
            break;
        }
    }

    canvas.style.cursor = isOverBall ? 'pointer' : 'default';
});

let phoneNumber = "";
let simplifiedPhoneNumber = "";
let colorArr = [];
let count = 0;
const displayArea = document.getElementById('clickedNumbers');

function clearPhoneNumber() {
    phoneNumber = "";
    count = 0;
    // const displayArea = document.getElementById('clickedNumbers');
    displayArea.textContent = phoneNumber;
}

function displayNumber(number) {
    console.log(phoneNumber.length)
    if (count < 10) {
        colorArr[count] = balls[number].color;
        if(count == 0)
        {
            phoneNumber += "( " + number + " ";
        }
        else if (count == 3){
            phoneNumber += ") - " + number + " ";
        }
        else if(count == 6){
            phoneNumber += " - " + number + " ";
        }
        else{
            phoneNumber += number + " ";
        }
        count++;
        displayArea.textContent = phoneNumber;
        simplifiedPhoneNumber += number;

        if (count === 10) {
            document.getElementById('submitButton').disabled = false;
        }
    }
}

function handleSubmit() {
    if (phoneNumber.length === 29) {
        isAnimating = false;
        drawPhoneNumber();
    } else {
        alert("Phone number must contain 10 digits.");
    }
}

function drawPhoneNumber() {

    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    let ballSize = 30;
    let spacing = 65;
    let startingX = (width - spacing * 10) / 2

    for(let i = 0; i < 10; i++){
            ctx.beginPath();
            ctx.fillStyle = colorArr[i];
            ctx.arc(startingX + i * spacing , height/4 , ballSize,0,2*Math.PI);
            ctx.fill(); 
    
            ctx.fillStyle = 'white';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(simplifiedPhoneNumber[i], startingX + i * spacing, height/4);
    }
}

document.getElementById('deleteButton').addEventListener('click', clearPhoneNumber);

let isAnimating = true;
function loop(){
    if(isAnimating){
        ctx.fillStyle = "rgba(0,0,0,0.25)"; 
        ctx.fillRect(0, 0, width, height); 
                
        for(const ball of balls){
            ball.draw()
            ball.update();
        }
    }

    // makes the balls smooth
    animationFrameId = requestAnimationFrame(loop);
}

function handleReset() {

    // makes sure only 1 loop was active at a time
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    isAnimating = true;

    phoneNumber = "";
    simplifiedPhoneNumber = "";
    count = 0;
    balls.length = 0; // Clear the balls array
    initializeBalls(); // Function to re-initialize the balls
    const displayArea = document.getElementById('clickedNumbers');
    displayArea.textContent = phoneNumber; // Reset the display area
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loop(); // Restart the animation loop if it was stopped
}

function initializeBalls() {
    let num = 0;
    while (balls.length < 10) {
        const size = 30;
        const ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            randomRGB(),
            size,
            num
        );
        num++;
        balls.push(ball);
    }
}


document.getElementById('resetButton').addEventListener('click', handleReset);

addBalls();
loop();

document.getElementById('submitButton').addEventListener('click', handleSubmit);
