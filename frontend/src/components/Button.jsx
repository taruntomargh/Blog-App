import React from 'react'

const Button = ({value, addedStyle}) => {
  return (
    <button className={`p-1 bg-red-500 text-white rounded-md ${addedStyle}`}>{value}</button>
  )
}

export default Button