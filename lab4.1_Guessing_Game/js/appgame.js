Vue.createApp({
    data() {
        return {
            guess: '',
            number: Math.floor(Math.random() * 100) + 1,
            alert: "Start Guessing...",
        }
    },
    methods: {
        checkGuess: function() {
            if (this.guess == this.number) {
                this.alert = "You got it!"
            } else if (this.guess > this.number) {
                this.alert = "Guess lower"
            } else {
                this.alert = "Guess higher"
            }
        },
        giveUp() {
            this.alert = "The number is " + this.number + ". Better luck next time!"
        },
        startOver() {
            this.number = Math.floor(Math.random() * 100) + 1
            this.alert = "Start Guessing..."
            this.guess = 0
        }
    }
}).mount('#app');