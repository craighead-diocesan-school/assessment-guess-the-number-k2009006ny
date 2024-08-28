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

        let userAttempt = prompt('Enter your guess.')
        if (userAttempt == computerNumber) {
            alert('Well done!')
            let result = (userName + ',' + count)
            // newScore = userName + ',' + count
            scores.push(result)
            break;
        } else {
            alert('Nope!')
        }
    }

}

let scores = []

function result() {
    alert(scores)
}