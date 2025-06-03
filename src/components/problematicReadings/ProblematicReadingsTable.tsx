import React from 'react'
import type { ProblematicReading } from '../../types'
import { PhSvg } from '../../assets/svgs/PhSvg'
import { TempSvg } from '../../assets/svgs/TempSvg'
import { EcSvg } from '../../assets/svgs/EcSvg'
import { DateSvg } from '../../assets/svgs/DateSvg'
import { ProblematicReadingsList } from './problematicReadingsList'

type ProblematicReadingsTableProps = {
  problematicReadings: ProblematicReading[]
  selectedUnit: string
  setIsModalShown: (isModalShown:boolean) => void
}

export const ProblematicReadingsTable =({problematicReadings, selectedUnit, setIsModalShown}: ProblematicReadingsTableProps) => {
  const tableHead = [<span className="num">#</span>,<PhSvg/>,<TempSvg/>,<EcSvg/>, <DateSvg/>].map(item => <div className="head-item flex-jc-ac">{item}</div>) 
  
  return (
        <section className="problematic-readings-container flex-col flex-ac">

          <h2 className="table-title center">List of 10 readings classified as Needs Attention for  unit 
            <small className="unit-id"># {selectedUnit}</small>
          </h2>

          <div className="problematic-readings-table grid">
            {tableHead.map((item) => item)}
            <ProblematicReadingsList problematicReadings={problematicReadings} />
          </div>

          <button className="btn center" onClick={() => setIsModalShown(false)}>Back</button>
        </section>
  )
}