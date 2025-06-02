import React from 'react'
import type { Pod } from '../../types'
import { PodPreview } from './PodPreview'

type PodsListProps = {
      pods: Pod[]
}

export const PodsList = ({pods}:PodsListProps) => {

const podsNames = ['Lettuce','Arugula','Basil','Parsley','Mix',]

  return (
    <section className="pods-wrapper  grid">
        {podsNames.map((name) => <div className="row-name">{name}</div>)}
        {pods.map((pod) => <PodPreview pod={pod}/>)}
    </section>
  )
}