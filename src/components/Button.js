import React from 'react'

const Button = ({children,type}) => {
  return (
    <button type={type} className='bg-gradient-to-tr from-blue-400 w-full to-blue-800 hover:bg-gradient-to-tr text-white hover:text-gray-200 hover:rounded-[20px] hover:from-blue-800 hover:to-blue-400 px-5 py-2 rounded-[10px]'>{children}</button>
  )
}

export default Button 