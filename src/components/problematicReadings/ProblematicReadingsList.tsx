import React from 'react'
import type { ProblematicReading } from '../../types'
import { ProblematicReadingPreview } from './ProblematicReadingPreview'

type problematicReadingsListProps = {
    problematicReadings :ProblematicReading []
}

export const ProblematicReadingsList = ({problematicReadings}: problematicReadingsListProps) => {
  return (
    problematicReadings.map((problematicReading,idx) => 
    <ProblematicReadingPreview problematicReading={problematicReading} idx={idx}/>)
  )
}