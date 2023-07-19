import words from "../words"

const initialColors = [
    { id: 1, color: 'yellow', isOpen: false },
    { id: 2, color: 'blue', isOpen: false },
    { id: 3, color: 'black', isOpen: false },
    { id: 4, color: 'red', isOpen: false },
    { id: 5, color: 'blue', isOpen: false },
    { id: 6, color: 'blue', isOpen: false },
    { id: 7, color: 'red', isOpen: false },
    { id: 8, color: 'red', isOpen: false },
    { id: 9, color: 'blue', isOpen: false },
    { id: 10, color: 'red', isOpen: false },
    { id: 11, color: 'blue', isOpen: false },
    { id: 12, color: 'red', isOpen: false },
    { id: 13, color: 'blue', isOpen: false },
    { id: 14, color: 'red', isOpen: false },
    { id: 15, color: 'blue', isOpen: false },
    { id: 16, color: 'red', isOpen: false },
    { id: 17, color: 'yellow', isOpen: false },
    { id: 18, color: 'blue', isOpen: false },
    { id: 19, color: 'blue', isOpen: false },
    { id: 20, color: 'yellow', isOpen: false },
    { id: 21, color: 'yellow', isOpen: false },
    { id: 22, color: 'yellow', isOpen: false },
    { id: 23, color: 'yellow', isOpen: false },
    { id: 24, color: 'yellow', isOpen: false },
    { id: 25, color: 'red', isOpen: false },

]

const generateCardData = () => {
    let randomWords = [...words.wordset1].sort(() => Math.random() - 0.5)
    let randomColors = [...initialColors].sort(() => Math.random() - 0.5)
    let cards = []
    for (let i = 0; i < 25; i++) {
        cards.push({ word: randomWords[i], color: randomColors[i].color, isOpen: randomColors[i].isOpen })
    }
    console.log(cards, '\n ended');
    return cards;
}

export default generateCardData;