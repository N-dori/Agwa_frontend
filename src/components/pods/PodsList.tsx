import React from 'react'
import type { Pod } from '../../types'
import { PodPreview } from './PodPreview'

type PodsListProps = {
      pods: Pod[]
}

export const PodsList = ({pods}:PodsListProps) => {

const podsNames = ['Lettuce','Arugula','Basil','Parsley','Mix',]

  return (
    <ul className="pods-wrapper grid">
        {podsNames.map((name) => <div className="row-name">{name}</div>)}
        {pods.map((pod, idx) => <PodPreview pod={pod} idx={idx}></PodPreview>)}
    </ul>
  )
}