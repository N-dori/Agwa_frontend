import React from 'react'
import type { Pod } from '../../types'
import { GreenLeafs } from '../../assets/svgs/GreenLeafs'

type Props = {
    pod: Pod
}

export const PodPreview = ({pod}: Props) => {
  return (
    <div className="pod-container"><GreenLeafs/></div>
  )
}