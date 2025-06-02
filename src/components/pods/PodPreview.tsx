import React from 'react'
import type { Pod } from '../../types'
import { GreenLeafs } from '../../assets/svgs/GreenLeafs'
import { HealthySvg } from '../../assets/svgs/HealthySvg'
import { AttentionSvg } from '../../assets/svgs/AttentionSvg'
import { ProgressCircleSvg } from '../../assets/svgs/ProgressCircleSvg'

type Props = {
    pod: Pod
}

const HEALTHY = 'Healthy' 
const NEEDS_ATTENTION = 'needsAttention' 

export const PodPreview = ({pod}: Props) => {
const isHealthy = pod.classification === HEALTHY 
const PodTooltip = () => {
    return  <div className="pod-tooltip">
                <p className="pod-age">{` ${pod.age}% grown`}</p> 
                <div className="pod-age flex-ac gap-05"> <p>{pod.classification}</p> { isHealthy ? <HealthySvg/>: <AttentionSvg/>}</div> 
            </div>
} 
const percent = Math.max(0, Math.min(100, pod.age));

  return (
    <div className="pod-tooltip-wrapper">
        <ProgressCircleSvg isHealthy={isHealthy} percent={percent}/>
        <div className={`pod-container ${isHealthy ? HEALTHY : NEEDS_ATTENTION }`} >
            <GreenLeafs/>
        </div>
        <PodTooltip/>
    </div>
  )
}