import React from 'react'

const CardWrapper = ({children}) => {
  return (
    <div className="grid  gird-cols-1 sm:grid-cols-2 gap-5 h-fit   md:w-[80%] w-[93%] md:grid-cols-4  my-10 mx-auto">
    {children}
    </div>
  )
}

export default CardWrapper