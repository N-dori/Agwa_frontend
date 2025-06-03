import React from 'react'
import type { Unit } from '../../types'

type UnitOpenBtnProps = {
    unit: Unit
    setSelectedUnit: (id:string) => void
    selectedUnit: string
}

export const UnitOpenBtn = ({unit, selectedUnit, setSelectedUnit}: UnitOpenBtnProps) => {
  return (
    <label className="radio-wrapper flex">
              <input
                type="radio"
                name="tray"
                className="open-tray-btn hidden"
                value={selectedUnit}
                onClick={() => setSelectedUnit(selectedUnit === unit?.id ? '' :unit?.id  )}
                checked={selectedUnit === unit?.id}
              />
              <span className="custom-radio" ></span>
    </label>
  )
}

