let choices = ["rock", "paper", "scissors"];
playgame();

function gethuman() {

  let choicehum = prompt("Enter your choice");
  if (choicehum === "rock") {
    return choices[0];
  }
  else if (choicehum === "paper") {
    return choices[1];
  }
  else {
    return choices[2];
  }
}



function rpsmachine() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return choices[0];
  }
  else if (choice === 1) {
    return choices[1];
  }
  else {
    return choices[2];
  }
}

function playgame() {
  let humanscore = 0;
  let machinescore = 0;
  for (let i = 0; i < 5; i++) {
    let humanchoice = gethuman();
    let machinechoice = rpsmachine();
    playround(humanchoice, machinechoice);
    }
  console.log("Your score is " + humanscore);


  function playround(choice1, choice2) {
    let lowerchoice = choice1.toLowerCase();
    if (lowerchoice === choice2) {
      console.log(" It's a draw");
    }
    else if (lowerchoice === "rock" && choice2 === "paper") {
      machinescore++;
      console.log(choice2 + " You lost");
    }
    else if (lowerchoice === "paper" && choice2 === "rock") {
      humanscore++;
      console.log(" You won you score is " + humanscore)
    }

    else if (lowerchoice === "scissors" && choice2 === "rock") {
      machinescore++;
      console.log(" You lost")
    }

    else if (lowerchoice === "rock" && choice2 === "scissors") {
      humanscore++;
      console.log(" You won you score is " + humanscore)
    }

    else if (lowerchoice === "paper" && choice2 === "scissors") {
      machinescore++;
      console.log(" You lost")
    }

    else if (lowerchoice === "scissors" && choice2 === "paper") {
      humanscore++;
      console.log(" You won you score is " + humanscore)
    }

    else if (lowerchoice === "rock" && choice2 === "paper") {
      machinescore++;
      console.log(" You lost");
    }
    else if (lowerchoice === "paper" && choice2 === "rock") {
      humanscore++;
      console.log(" You won you score is " + humanscore)
    }
  }
 }
