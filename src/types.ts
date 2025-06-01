export type Unit = {
    id: string
    pods: Pod[]
}

export type Pod = {
    id: string
    readings: reading[]
    age : number
    timestamp : Date
}

export type reading = {
    id: string
    readings: { pH: number, temp: number, ec: number }

}