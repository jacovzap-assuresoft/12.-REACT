import React from 'react'

const Key = ({style, handleClick, label}) => {
  return (
    <button className={style} onClick={handleClick}>{label}</button>
  )
}

export default Key