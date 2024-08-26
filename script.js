function game() {
    alert("Let's play Guess the Number!")
    let name = prompt('What is your name?')
    //get the user's name
    alert('Hi, ' + name + "! I am thinking of a number between 1 and 20 inclusive.")
    //output with using the name that I received
    let computerNumber = Math.floor(Math.random() * (20 - 1) + 1)
    //A number between 1 and 20 will be chosen randomly

    let count = 0
    while (true) {
        count = count + 1

        let userAttempt = prompt('Enter your guess.')
        if (userAttempt == computerNumber) {
            alert('Well done!')
            break;
        } else {
            alert('Nope!')
        }
    }
    addNewScore()
}
function addNewScore() {
    scores.push("Yuna, 3")
}
let scores = [
    "Yuna, 1",
    "Yuna, 5",
    "Yuna, 7"
]

function result() {
    alert(scores)
}