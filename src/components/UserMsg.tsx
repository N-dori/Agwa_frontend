import React, { useState } from 'react'

type UserMsgProps = {
    txt: string
}

export const UserMsg = ({txt}: UserMsgProps) => {
const isActive = !!txt;
  return (
    <div className={`user-msg ${isActive ? 'active' : '' } flex-jc-ac`}>
        {txt}
    </div>
  )
}

 