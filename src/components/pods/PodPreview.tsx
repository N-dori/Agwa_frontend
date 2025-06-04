import React from 'react'
import type { Pod } from '../../types'
import { GreenLeafs } from '../../assets/svgs/GreenLeafs'
import { HealthySvg } from '../../assets/svgs/HealthySvg'
import { AttentionSvg } from '../../assets/svgs/AttentionSvg'
import { ProgressCircleSvg } from '../../assets/svgs/ProgressCircleSvg'

type Props = {
    pod: Pod
}


export const PodPreview = ({pod}: Props) => {
const PodTooltip = () => {
    return  <div className="pod-tooltip">
                <p className="pod-age">{` ${pod.age}% grown`}</p> 
            </div>
} 
const percent = Math.max(0, Math.min(100, pod.age));

  return (
    <div className="pod-tooltip-wrapper">
        <ProgressCircleSvg percent={percent}/>
        <div className="pod-container" >
            <GreenLeafs/>
        </div>
        <PodTooltip/>
    </div>
  )
}