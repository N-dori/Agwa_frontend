import React from 'react'
import { PodsList } from './PodsList'
import type { Pod } from '../../types'

type PodsIndexProps = {
  pods: Pod[]
  unitId: string
  onInspectUnit: () => void
}

export const PodsIndex = ({pods, unitId, onInspectUnit}: PodsIndexProps) => {

  return (
    <section className="pods-container flex-col" >

        <div className="input-container flex-jc-ac ">
          <input className="unit-input" type="text" value={'Unit - '+unitId} readOnly/>
          <button onClick={onInspectUnit} type='button' className="inspect-btn">Inspect</button>
        </div>

        <PodsList pods={pods}/>
    </section>
  )
}