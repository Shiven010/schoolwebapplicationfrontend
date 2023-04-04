import React from 'react'

const FormWrapper = ({children}) => {
  return (
    <div className="flex shadow-slate-400  flex-col rounded-[15px] shadow-lg gap-2  items-center  p-3 my-5 border-slate-200 border-2  w-[95%] sm:w-[60%] mx-auto">{children}</div>
  )
}

export default FormWrapper