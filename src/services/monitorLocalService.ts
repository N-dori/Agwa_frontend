import { localStorageService } from "./localStorage.service"
import { utilService } from "./util.service"

const MIN_PH = 1
const MAX_PH = 10
const MIN_TEMP = 1
const MAX_TEMP = 41
const MIN_EC = 1
const MAX_EC = 10
const MIN_AGE = 1
const MAX_AGE = 100
const READINGS_AMOUNT = 5 
const PODS_NUMBER = 20
const TRAYS_NUMBER = 3
const UNITS_STORAGE_KEY = 'units'



const getInitialData = () => {
    const units = localStorageService.load(UNITS_STORAGE_KEY)
        if(!units || units.length<1) {
            const units = createUnits()
            localStorageService.store(UNITS_STORAGE_KEY,units)
            return units
        }
    return units
}  

const createRandomPh = () => {
    return utilService.getRandomFloatInclusive(MIN_PH, MAX_PH)
}

const createRandomTemp = () => {
    return utilService.getRandomFloatInclusive(MIN_TEMP, MAX_TEMP)
}

const createRandomEc= () => {
    return utilService.getRandomFloatInclusive(MIN_EC, MAX_EC)
}

const createRandomAge = () => {
    return utilService.getRandomIntInclusive(MIN_AGE, MAX_AGE)
}

const createReading = () => {
    return  { pH: createRandomPh(), temp: createRandomTemp(), ec: createRandomEc() } 
}

const createReadings = () => {
    const readings = Array(READINGS_AMOUNT).fill(null).map(_ => createReading())
    return  readings 
}

const createPod = () => {
    return {
        id: utilService.makeId(8),
        readings : createReadings(),
        age: createRandomAge(),
        timestamp: utilService.randomPastTime()
    }
}

const createUnit = () => {
    const pods = Array(PODS_NUMBER).fill(null).map(_ => createPod())
    return {
        id: utilService.makeId(12),
        pods,
    }
}

const createUnits = () => {
    const units = Array(TRAYS_NUMBER).fill(null).map(_ => createUnit())
    return  units 
}

export const monitorService = {
getInitialData
}