import React from 'react'
import type { ProblematicReading } from '../../types'

type ProblematicReadingPreviewProps = {
    problematicReading: ProblematicReading
    idx: number
}

export const ProblematicReadingPreview = ({problematicReading, idx}: ProblematicReadingPreviewProps) => {
if(!problematicReading) return
    const { pH , temp, ec } = problematicReading.readings
    return (
    <>
    <span>{idx+1}</span>
    <span>{pH}</span>
    <span>{temp}</span>
    <span>{ec}</span>
    <span className="reading-timestamp">{problematicReading.timestamp}</span>
    </>
  )
}