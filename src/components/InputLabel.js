import React from 'react'

const InputLabel = ({name,type,onchange,value,statename, pattern,min}) => {
  return (
    <label htmlFor={name}>
            <div className="flex items-center font-bold  flex-row gap-1 ">{name}</div>
            <input
              className="w-full pt-5 border-b value= focus:outline-none  border-gray-300"
              id={name}
              type={type}
              value={value}
              onChange={onchange}
              name={statename}
              placeholder="Type here"
              required
              pattern={pattern}
              min={min}
            />
          </label>
  )
}

export default InputLabel