import React from 'react'
import type { ProblematicReading } from '../../types'
import dayjs from 'dayjs'

type ProblematicReadingPreviewProps = {
    problematicReading: ProblematicReading
    idx: number
}

export const ProblematicReadingPreview = ({problematicReading, idx}: ProblematicReadingPreviewProps) => {
if(!problematicReading) return
    const { pH , temp, ec } = problematicReading.readings
    const date =  dayjs(problematicReading.timestamp).format('DD-MM-YYYY')
    return (
    <>
    <span>{idx+1}</span>
    <span>{pH}</span>
    <span>{temp}</span>
    <span>{ec}</span>
    <span className="reading-timestamp">{date}</span>
    </>
  )
}