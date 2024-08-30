function game() {
    alert("Let's play Guess the Number!")
    let userName = prompt('What is your name?')
    //get the user's name
    alert('Hi, ' + userName + "! I am thinking of a number between 1 and 20 inclusive.")
    //output with using the name that I received
    let computerNumber = Math.floor(Math.random() * (20 - 1) + 1)
    //A number between 1 and 20 will be chosen randomly

    let count = 0
    while (true) {
        count = count + 1
        //Count from 0 increase by 1 until the user guesses the number of computer

        let userAttempt = prompt('Enter your guess.')
        //Get the user's choice
        if (userAttempt == computerNumber) {
            alert('Well done!')
            let result = (userName + ',' + count)
            // newScore = userName + ',' + count
            scores.push(result)
            break;
        } else if (userAttempt != 0 && userAttempt < 21) {
            alert('Nope!')
        } else {
            alert('Sorry, it is not avairable. Try again.')
        }
        //If the entered value is a number between 1 and 20 and is not equal to the computer number, it will display "nope!", and if any other number or word is entered, it will display "Sorry, it is not avairable. Try again"
    }

}

let scores = []
//The username and count inputs from the previous function are entered within [] (which means array)

function result() {
    alert('Scoreboard; ' + scores)
    //display the word scoreboard; and the names and counts entered in the array
}