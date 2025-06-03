import React, { useEffect, useState } from 'react'
import { Modal } from '../components/Modal'
import { modalTypes } from '../utils/modal'
import { monitorService } from '../services/monitorLocalService'
import type { ProblematicReading, Unit } from '../types'
import { UnitsIndex } from '../components/units/UnitsIndex'
import { pyMonitorService } from '../services/monitorService'

type Props = {}

export default function MonitorIndex({}: Props) {
const [units, setUnits] = useState<Unit[]>([]);
const [isModalShown, setIsModalShown] = useState<boolean>(true)
const [modalType, setModalType] = useState<string>(modalTypes.INTRO)
const [modalBtnTxt, setBtnTxt] = useState<string>('Start Technical Exercise') // put in side modal
const [selectedUnit, setSelectedUnit] = useState<string>('') 
const [problematicReadings, setProblematicReadings] = useState<ProblematicReading[]>([]) 


useEffect(() => {
  fetchUnits();
}, []);

const fetchUnits = async () => {
  const initialData =  pyMonitorService.getInitialSensorData();
  const classifiedData = await pyMonitorService.sendSensorData(initialData);
  setUnits(classifiedData);
}

const onInspectUnit = async () => {
setModalType(modalTypes.INSPECT)
setBtnTxt('Back')
setIsModalShown(true)
// const problematicReadings = monitorService.getUnitProblematicReadings(selectedUnit)
const problematicReadings = await pyMonitorService.getAlerts(selectedUnit)
setProblematicReadings(problematicReadings)
}

const unitIndexProps = {
units,
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
      <h2 className="monitor-subtitle center">Healthy Plants, Happy Growers</h2>
      <h3 className="monitor-subtitle center">60 plants per pod — inspect any tray to check their status</h3>

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