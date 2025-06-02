import React from 'react'
import { PodsList } from './PodsList'
import type { Pod } from '../../types'

type PodsIndexProps = {
  pods: Pod[]
}

export const PodsIndex = ({pods}: PodsIndexProps) => {
  return (
    <section className="pods-container flex-col" >
        <button> Inspect Unit</button>
        <PodsList pods={pods}/>
    </section>
  )
}