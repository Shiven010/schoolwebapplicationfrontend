import React from 'react'

const Form = ({children,onsubmit}) => {
  
  return (
    <form onSubmit={onsubmit} className="w-full flex flex-col gap-5">{children}</form>
  )
}

export default Form