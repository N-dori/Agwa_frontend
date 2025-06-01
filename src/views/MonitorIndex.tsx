import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import { modalTypes } from '../utils/modal'
import { monitorService } from '../services/monitorLocalService'
import type { Unit } from '../types'
import { UnitsIndex } from '../components/UnitsIndex'

type Props = {}

export default function MonitorIndex({}: Props) {
  const [isModalShown, setIsModalShown] = useState<boolean>(true)
  const [modalType, setModalType] = useState<string>(modalTypes.INTRO)
  const [modalBtnTxt, setBtnTxt] = useState<string>('Start Technical Exercise')

  const initialData :Unit [] = monitorService.getInitialData()
  console.log({initialData});
  
  
  return (
    <section className="monitor-container grid">
      <h1 className="monitor-title center"> ~HydroSense Monitor~ </h1>
      <section className="units-container"> 
        <UnitsIndex units={initialData}/>
      </section>
      {isModalShown && 
        <>
        <Modal type={modalType} btnTxt={modalBtnTxt} setIsModalShown={setIsModalShown}/>
        <div className="modal-overlay"></div>
        </>
      }
    </section>
  )
}