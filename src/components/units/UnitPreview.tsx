import React, { useState } from 'react'
import type { Unit } from '../../types'
import { TraysLevelIcon } from '../TraysLevelIcon'
import { TrayQuantity } from '../TrayQuantity'
import { UnitOpenBtn } from './UnitOpenBtn'
import { PodsIndex } from '../pods/PodsIndex'

type UnitPreviewProps = {
  unit : Unit 
  idx : number
  setSelectedUnit: (id:string) => void
  selectedUnit: string
  onInspectUnit: () => void
}

export const UnitPreview = ({unit, idx, setSelectedUnit, selectedUnit, onInspectUnit}: UnitPreviewProps) => {

  return (
    <>
    <article className="unit-container ">

      <section className="unit-panel grid"> 
        <TraysLevelIcon idx={idx}/>
        {selectedUnit !== unit.id && 
        <TrayQuantity idx={idx} unitQuantity={unit?.pods?.length}/>}
        <UnitOpenBtn unit={unit} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit}/> 
      </section>

    </article>

     {selectedUnit === unit.id &&
     <PodsIndex pods={unit.pods} unitId={unit.id} onInspectUnit={onInspectUnit}/>} 
         
    </>
  )
}