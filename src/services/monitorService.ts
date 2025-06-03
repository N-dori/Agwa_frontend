import type { Pod, ProblematicReading, Reading, Unit } from "../types"
import { httpService } from "./http.service"
import { localStorageService } from "./localStorage.service"
import { utilService } from "./util.service"

const MIN_PH = 5
const MAX_PH = 6.5
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



const getInitialSensorData = () => {
    const units = localStorageService.load(UNITS_STORAGE_KEY)
        if(!units || units.length < 1) {
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

const createReading = (): Reading => {
    return  {id:utilService.makeId(), pH: createRandomPh(), temp: createRandomTemp(), ec: createRandomEc() } 
}

const createReadings = () : Reading[]=> {
    const readings = Array(READINGS_AMOUNT).fill(null).map(_ => createReading())
    return  readings 
}

const createPod = (): Pod  => {
    return {
        id: utilService.makeId(8),
        readings : createReadings(),
        age: createRandomAge(),
        timestamp: utilService.randomPastTime(),
        status:undefined,
        classification:undefined,
    }
}

const createUnit = () => {
    const pods = Array(PODS_NUMBER).fill(null).map(_ => createPod())
    return {
        id: utilService.makeId(12),
        pods,
    }
}

const validateReading = (reading:Reading) => {
   return  (reading.pH < 5.5 || reading.pH > 7) ? false : true
}

const createUnits = () => {
    const units = Array(TRAYS_NUMBER).fill(null).map(_ => createUnit())
    return  units 
}

const getUnitProblematicReadings = (unitId:string) => {

const units: Unit[] = localStorageService.load(UNITS_STORAGE_KEY)
const selectedUnit : Unit | undefined = units.find(unit => unit.id === unitId)

const problematicReadings :any = selectedUnit?.pods.reduce<ProblematicReading[]>((acc, pod :Pod|undefined) => {
    pod?.readings.forEach(reading => {
        if(!validateReading(reading)){
            acc.push({podId: pod.id, timestamp: pod.timestamp, readings:reading})
        }
    })
    return acc
},[])

const problematicReadingsSortedByDate = problematicReadings.sort(
    (a:ProblematicReading, b:ProblematicReading) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
);
return problematicReadingsSortedByDate.slice(0, 10);
}

export const sendSensorData = async (sensorData:Unit[]) => {
    try {
        const res = await httpService.post('sensor', sensorData)
        console.log('Server response:', res)
        return res
    } catch (err) {
        console.error('Error sending sensor data:', err)
    }
}

export const getAlerts = async (unitId:string) => {
    try {
        const res = await httpService.get('alerts', { unitId });
        console.log('Server response for alerts:', res)
        return res
    } catch (err) {
        console.error('Error getting alerts data:', err)
    }
}


export const pyMonitorService = {
getInitialSensorData,
getUnitProblematicReadings,
sendSensorData,
getAlerts
}