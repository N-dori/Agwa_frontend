

const makeId = (length = 6) => {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}


const makeLorem = (size = 100) => {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

const getRandomIntInclusive = (min:number, max:number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

const getRandomFloatInclusive = (min: number, max: number): number => {
    const randomFloat = Math.random() * (max - min) + min;
    return +randomFloat.toFixed(2)
};

const randomPastTime = () => {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return new Date(Date.now() - pastTime).toISOString() 
}


const saveToStorage = (key:string, value:any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const loadFromStorage = (key:string) => {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}
export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomFloatInclusive,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
}