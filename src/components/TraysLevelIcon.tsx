import React from 'react'

type TraysIconProps = {
    idx: number
}

export const TraysLevelIcon = ({idx}: TraysIconProps) => {
  return (
    <section className="trays-container flex-col">
        <div className={`tray ${idx === 0 ? 'bold' : '' }`}></div>
        <div className={`tray ${idx === 1 ? 'bold' : '' }`}></div>
        <div className={`tray ${idx === 2 ? 'bold' : '' }`}></div>
    </section>
  )
}