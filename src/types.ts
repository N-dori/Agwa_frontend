export type Unit = {
    id: string
    pods: Pod[]
}

export type Pod = {
    id: string
    readings: Reading[]
    age : number
    timestamp : string
    classification?:string | undefined
    status?:string | undefined
}

export type Reading = {
    id: string
    pH: number
    temp: number
    ec: number 

}

export type ProblematicReading = {
    podId: string
    timestamp: string
    readings: Reading
}