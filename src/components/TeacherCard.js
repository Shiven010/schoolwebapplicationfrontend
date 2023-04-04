import React from 'react'

const TeacherCard = (props) => {
  return (
   <div className='border border-slate-400 shadow-slate-400 shadow-md rounded-[20px] grid grid-row-2  w-fit h-fit'>
 
   {/* <img  className="rounded-t-[20px]" src="https://api.lorem.space/image/face?w=450&h=450" alt="TEACHERIMAGE" /> */}
   
   <div className='flex  flex-col p-4 gap-2'>
   <h2 className='text-2xl font-bold'>{props.name}</h2>
   <h3 className='text-xl'>{props.email} </h3>
   <p className='text-xl'>Subject - {props.subject}</p>
   <p className='text-xl'>{props.experience} years experience</p>
   </div>
   </div>
  )
}

export default TeacherCard