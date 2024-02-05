let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

   const genCompChoice=() =>{
    const options= ["rock", "paper" ,"scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
   };   
   const playGame=(userChoice) =>{
    console.log("user choice" ,userChoice);
   const compChoice=genCompChoice();
    console.log("comp choice", compChoice);




    const showWinner=(userWin,userChoice,compChoice) =>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            
            msg.innerText=`You Win Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            compScore++;
            compScorePara.innerText=compScore;
           
            msg.innerText="You lose!";
            msg.style.backgroundColor="red";
            msg.innerText=`You lose  ${compChoice} beats yours ${userChoice}`;
        }
    }
   
    if(userChoice===compChoice){
       
        msg.innerText="Game Draw!";
        msg.style.backgroundColor="default";
        msg.innerText=`Game Draw ${userChoice} beats ${compChoice}`;
    }
    else{
        let userWIn=true;
        if(userChoice==="rock"){
            userWIn=compChoice==="paper"?false:true;
        }
        else if (userChoice==="paper"){
             userWIn=compChoice==="scissors"?false:true;
        }
        else{
            userWIn=compChoice==="rock"?false:true;
        }
        showWinner(userWIn ,userChoice,compChoice);
    }

    


   };

  choice.forEach((choice) => {      
   choice.addEventListener("click",() =>{
   const userChoice =choice.getAttribute("id");
  playGame(userChoice);
   

   });
});