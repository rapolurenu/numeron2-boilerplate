// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const button = document.getElementById("buttons");
const timer = document.getElementById("timer");
number1.textContent = number1;
number2.textContent = number2;

// Iteration 3: Creating variables required to make the game functional
let time = 20;
let score = 0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const number3 = document.getElementById("number3");

// Iteration 5: Creating a randomise function to make the game functional
function randomiseNum() {
    num1 = Math.floor(Math.random()*101);
    num2 = Math.floor(Math.random()*101);
    number1.textContent = num1;
    number2.textContent = num2;
    arr = [num1+num2,num1*num2,(num1/num2).toFixed(1),num1-num2,num1%num2];
    num3 = arr[Math.floor(Math.random()*5)];
    number3.textContent = num3;
}

// Iteration 6: Making the Operators (button) functional
function checkResult(id){
    const index = {plus:0, minus:3, mul:1, divide:2, modulus:4};
    if (arr[index[id]]==num3){
        time = 20;
        randomiseNum();
        score++;
        console.log(score);
    }
    else{
        gameOver();
    }
}
// Iteration 7: Making Timer functional
let timeLimit = setInterval(()=>{
    timer.innerText = time;
    time--;
    if (time<0){
       gameOver();
    }
},1000)

randomiseNum();

button.addEventListener("click",(e)=>{``
    checkResult(e.target.id);
});
  
  function gameOver() {
    clearInterval(timeLimit);
    window.location.href = "./gameover.html";
    localStorage.setItem("score", score);
  }
