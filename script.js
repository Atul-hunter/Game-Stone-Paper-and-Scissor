/* Cash the Dumb Method */

const userScore = 0;
const compScore=0;
let userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const result_div=document.querySelector(".resultMessage");
const rock_value=document.getElementById("rock");
const paper_value=document.getElementById("paper");
const scissor_value=document.getElementById("scissor");
let countUser=0;
let countComp=0;

/* giving compChoice random values */

function computer(){
    choiceArray=["r","p","s"];
    randomValue=Math.floor(Math.random()*3);
    return choiceArray[randomValue];
};

/* setting up counter for userScore */

function userScoreCounter(){
    countUser++;
    userScore_span.innerHTML=countUser;
}

/* setting up counter for compScore */

function compScoreCounter(){
    countComp+=1;
    compScore_span.innerHTML=countComp;
}

/* defining game() in the it should work */

function game(userChoice){

    const computerChoice = computer();

    /* making cases for different selctions using Switch */

    switch (userChoice+computerChoice){
        
        /* user win cases */

        case "rs":result_div.innerHTML="&#x1F525 Rock beats Sci. You Win! &#x270C  "
        console.log("u win!"); 
            userScoreCounter()
            setTimeout(function() {document.getElementById("rockImg").style.border="2px solid #00ffff";},500);
            document.getElementById("rockImg").style.border="2px solid rgb(20, 235, 20)";
            break;
        case "sp":result_div.innerHTML="&#x1F525 Scissor cuts paper. You win! &#x270C  "
        console.log("u win!");
            userScoreCounter();
            setTimeout(function() {document.getElementById("scissorImg").style.border="2px solid #00ffff";},500);
            document.getElementById("scissorImg").style.border="2px solid rgb(20, 235, 20)";
            break;
        case "pr":result_div.innerHTML="&#x1F525 Paper Covers rock. You win! &#x270C  "
            console.log("u win!");
            userScoreCounter();
            setTimeout(function() {document.getElementById("paperImg").style.border="2px solid #00ffff";},500);
            document.getElementById("paperImg").style.border="2px solid rgb(20, 235, 20)";
            break;

        /* user lose cases */

        case "sr":result_div.innerHTML="&#128548 Rock beats Scissor. you lose.. &#129305"
        console.log("u lose...");
            compScoreCounter();
            setTimeout(function() {document.getElementById("scissorImg").style.border="2px solid #00ffff";},500);
            document.getElementById("scissorImg").style.border="2px solid rgb(255, 0, 0)";
            break;
        case "ps":result_div.innerHTML="&#128548 Scissor cuts paper. you lose.. &#129305"
        console.log("u lose...");
            compScoreCounter();
            setTimeout(function() {document.getElementById("paperImg").style.border="2px solid #00ffff";},500);
            document.getElementById("paperImg").style.border="2px solid rgb(255, 0, 0)";
            break;
        case "rp":result_div.innerHTML="&#128548 Paper Covers rock. you lose.. &#129305"
            console.log("u lose...");
            compScoreCounter();
            setTimeout(function() {document.getElementById("rockImg").style.border="2px solid #00ffff";},500);
            document.getElementById("rockImg").style.border="2px solid rgb(255, 0, 0)";
            break;

        /* user tie cases */

        case "rr":result_div.innerHTML="&#128566 Its a tie &#9729"
            console.log("Its a tie");
            setTimeout(function() {document.getElementById("rockImg").style.border="2px solid #00ffff";},500);
            document.getElementById("rockImg").style.border="2px solid rgb(160, 155, 155)";
            break;
        case "pp":result_div.innerHTML="&#128566 Its a tie &#9729"
            console.log("Its a tie");
            setTimeout(function() {document.getElementById("paperImg").style.border="2px solid #00ffff";},500);
            document.getElementById("paperImg").style.border="2px solid rgb(160, 155, 155)";
            break;   
        case "ss":result_div.innerHTML="&#128566 Its a tie &#9729"
            console.log("Its a tie");
            setTimeout(function() {document.getElementById("scissorImg").style.border="2px solid #00ffff";},500);
            document.getElementById("scissorImg").style.border="2px solid rgb(160, 155, 155)";
            break; 
    }
};
    
/* main() gives value to userChoice by alloting "r","p","s" */
function main(){
    
    rock_value.addEventListener("click" , function(){
    game('r');
    });

    paper_value.addEventListener("click", function(){
        game('p');
    });

    scissor_value.addEventListener("click", function(){
        game('s');
    });
}

/* calling user's function and our game() */

main();
game();