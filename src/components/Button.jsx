import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button type="button" style={{ backgroundColor:bgColor, color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}> {/* className is a template string */}
      {text}
    </button>
  )
}

export default Button