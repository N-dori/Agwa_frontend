import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import { modalTypes } from '../utils/modal'
import { monitorService } from '../services/monitorLocalService'

type Props = {}

export default function MonitorIndex({}: Props) {
  const [isModalShown, setIsModalShown] = useState<boolean>(true)
  const [modalType, setModalType] = useState<string>(modalTypes.INTRO)
  const [modalBtnTxt, setBtnTxt] = useState<string>('Start Technical Exercise')

  const initialData = monitorService.getInitialData()
  console.log({initialData});
  
  
  return (
    <section className="monitor-container">
      <h1 className="monitor-title center"> ~HydroSense Monitor~ </h1>
      <section className="trays-container"> </section>
      {isModalShown && 
        <>
        <Modal type={modalType} btnTxt={modalBtnTxt} setIsModalShown={setIsModalShown}/>
        <div className="modal-overlay"></div>
        </>
      }
    </section>
  )
}