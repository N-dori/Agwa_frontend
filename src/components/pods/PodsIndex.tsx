import React from 'react'
import { PodsList } from './PodsList'
import type { Pod } from '../../types'

type PodsIndexProps = {
  pods: Pod[]
  unitId: string
}

export const PodsIndex = ({pods, unitId}: PodsIndexProps) => {
  return (
    <section className="pods-container flex-col" >

        <div className="input-container flex-jc-ac ">
        <input className="unit-input" type="text" value={'Unit - '+unitId} readOnly/>
        <button className="inspect-btn">Inspect</button>
        </div>

        <PodsList pods={pods}/>
    </section>
  )
}