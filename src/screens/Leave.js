import React,{useState} from 'react'
import FormWrapper from '../components/FormWrapper'
import Form from '../components/Form'
import HeadingWrapper from '../components/HeadingWrapper'
import Navbar from "../components/Navbar";
const Leave = () => {

  const [leave, setleave] = useState({studentId:'shubham@gmail.com', reason:'sick' , from:'', to:'', message:''})

  function onchange(e){
    setleave({...leave,[e.target.name]:e.target.value})
  }

  const handlesubmit = async(e) =>{
    e.preventDefault()
    console.log(leave)

    const response = await fetch("http://localhost:8085/leave",{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({
          studentId:localStorage.getItem('username'),
          reason:leave.reason, 
          startDate:leave.from, 
          endDate:leave.to, 
          reasondefined:leave.message
        })
      })
      const data = await response.json()
      console.log(data);

      if(data)
      { 
        alert("Leave Requested")


      }
      else{
        alert("invalid")
      }

    setleave({reason:'sick' , from:'', to:'', message:''})
  }


  return (
    <div>
    <Navbar/>
          <FormWrapper>
        <HeadingWrapper>APPLY FOR LEAVE</HeadingWrapper>
        <Form onsubmit={handlesubmit}>
          <label id="reasonforleave">
            <div className="text-left text-xl font-bold ml-2 mb-4">
              
              Reason For Leave
            </div>
            <select
              id="reasonforleave"
              className="w-full flex flex-row h-fit border p-2 rounded-md"
              onChange={onchange}
              value={leave.reason}
              name={'reason'}
            >
             
              <option value="sick">I am apllying for sick leave.</option>
              <option value="fest">
                I am applying for cultural fest leave.
              </option>
              <option value="OD">
                I am applying for On Duty (OD) leave
              </option>
              <option value="others">Others</option>
            </select>
          </label>
          <div className="flex flex-col md:flex-row w-full gap-5  my-4 md:items-center">
           
            <label className="flex flex-row justify-around  items-center gap-4">
            
              {" "}
              <div className="text-xl">From-</div>
              <input
                className="border bg-slate-50 rounded-md p-1"
                type="date"
                id="from"
                name="from"
                value={leave.from}
              onChange={onchange}

              />
            </label>
            <label className="flex flex-row justify-around items-center gap-4">
            <div className="text-xl">To-</div>
              <input
                className="border bg-slate-50 rounded-md p-1 "
                type="date"
                id="to"
                name="to"
                value={leave.to}
              onChange={onchange}

              ></input>
            </label>
          </div>

          <div>
            <label className="flex flex-col gap-5">
              <div className="text-left text-xl font-bold ">
                Ellaborate your reason
              </div>
         
              <textarea name="message" 
                   onChange={onchange}
                value={leave.message} className="resize-none border w-full p-2 rounded-md"></textarea>
            </label>
          </div>
          <button type='submit' className="bg-gradient-to-tr from-blue-400 w-full to-blue-800 hover:bg-gradient-to-tr text-white hover:text-gray-200 hover:rounded-[20px] hover:from-blue-800 hover:to-blue-400 px-5 py-2 rounded-[20px] mx-2">
            Submit
          </button>
        </Form>
      </FormWrapper>
    </div>
  )
}

export default Leave