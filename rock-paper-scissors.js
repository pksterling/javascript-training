 function computerPlay() {
  let computerPlayNumber = Math.ceil( Math.random() * 3 )
  switch ( computerPlayNumber ) {
    case 1:
      return "Rock"
      break
    case 2:
      return "Paper"
      break
    case 3:
      return "Scissors"
      break
  }
}

function quantifySelection(input) {
  if ( /^rock$/i.test(input) ) {
    return 1
  } else if ( /^paper$/i.test(input) ) {
    return 2
  } else if ( /^scissors$/i.test(input) ) {
    return 3
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0
  function playRound( player, comp ) {
    let playerSelection = prompt( "Make your selection: Rock, paper or scissors" )
    let computerSelection = computerPlay()
    let playerSelectionNum = quantifySelection( playerSelection )
    let computerSelectionNum = quantifySelection( computerSelection )
    let result = playerSelectionNum - computerSelectionNum
    console.log( result )
    if ( result == 0 ) {
      console.log( "Draw! " + playerSelection + " can't beat " + computerSelection + "!" )
    } else if ( result == 1 || result == - 2 ) {
      playerScore++
      console.log( "You win! " + playerSelection + " beats " + computerSelection + "!" )
    } else if ( result == - 1 || result == 2 ) {
      computerScore++
      console.log( "You lose! " + computerSelection + " beats " + playerSelection + "!" )
    }
  }
  for ( let i = 0; i < 5; i++ ) {
    playRound()
    // console.log( `Score:
    // You ${ playerScore } : ${ computerScore } Computer` )
    console.log( "Score: You " + playerScore + " - " + computerScore + " Computer" )
  }
  if ( playerScore > computerScore ) {
    console.log( "Congratulations! You win!" )
  } else if (playerScore < computerScore ) {
    console.log( "Wow! You just lost." )
  } else {
    console.log( "Draw. What a complete waste of time" )
  }

}

let playerScore
let computerScore

game()