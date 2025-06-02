import React from 'react'
import type { Pod } from '../../types'

type Props = {
    pod: Pod
    idx: number
}

export const PodPreview = ({pod,idx}: Props) => {
  return (
    <div className={`pod-container pod-${idx}`}>Pod</div>
  )
}