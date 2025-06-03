import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import { modalTypes } from '../utils/modal'
import { monitorService } from '../services/monitorLocalService'
import type { ProblematicReading, Unit } from '../types'
import { UnitsIndex } from '../components/units/UnitsIndex'

type Props = {}

export default function MonitorIndex({}: Props) {
const [isModalShown, setIsModalShown] = useState<boolean>(true)
const [modalType, setModalType] = useState<string>(modalTypes.INTRO)
const [modalBtnTxt, setBtnTxt] = useState<string>('Start Technical Exercise') // put in side modal
const [selectedUnit, setSelectedUnit] = useState<string>('') 
const [problematicReadings, setProblematicReadings] = useState<ProblematicReading[]>([]) 


const initialData :Unit [] = monitorService.getInitialData()

const onInspectUnit = () => {
  setModalType(modalTypes.INSPECT)
  setBtnTxt('Back')
  setIsModalShown(true)
  const problematicReadings = monitorService.getUnitProblematicReadings(selectedUnit)
  setProblematicReadings(problematicReadings)
}

const unitIndexProps = {
  units: initialData,
  setSelectedUnit,
  selectedUnit,
  onInspectUnit
} 

const modalProps = {
  type: modalType,
  btnTxt: modalBtnTxt,
  setIsModalShown,
  problematicReadings,
  selectedUnit
}
 
  return (
    <section className="monitor-container grid">
      <h1 className="monitor-title center"> ~HydroSense Monitor~ </h1>
      <section className="units-container"> 
        <UnitsIndex {...unitIndexProps} />
      </section>
      {isModalShown && 
        <>
          <Modal {...modalProps} />
          <div className="modal-overlay"></div>
        </>
      }
    </section>
  )
}