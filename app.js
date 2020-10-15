document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [{
            name: 'fries',
            img: 'fries.png'
        },
        {
            name: 'fries',
            img: 'fries.png'
        }, {
            name: 'cheeseburger',
            img: 'cheeseburger.png'
        }, {
            name: 'cheeseburger',
            img: 'cheeseburger.png'
        }, {
            name: 'hotdog',
            img: 'hotdog.png'
        }, {
            name: 'hotdog',
            img: 'hotdog.png'
        }, {
            name: 'ice-cream',
            img: 'ice-cream.png'
        }, {
            name: 'ice-cream',
            img: 'ice-cream.png'
        }, {
            name: 'milkshake',
            img: 'milkshake.png'
        }, {
            name: 'milkshake',
            img: 'milkshake.png'
        }, {
            name: 'pizza',
            img: 'pizza.png'
        }, {
            name: 'pizza',
            img: 'pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You Found a Match')
            cards[optionOneId].setAttribute('src', 'white.png')
            cards[optionTwoId].setAttribute('src', 'white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'blank.png')
            cards[optionTwoId].setAttribute('src', 'blank.png')
            alert('Sorry, Try Again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWong.length === cardsArray.legnth / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all'
        }
    }

    // flip your card
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})