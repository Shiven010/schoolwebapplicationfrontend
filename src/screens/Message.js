import React, { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import Form from "../components/Form";
import HeadingWrapper from "../components/HeadingWrapper";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useEffect } from "react";

const Message = () => {
  const [message, setmessage] = useState({
    teacherName: "",
    studentMessage: "",
  });

  function onchange(e){
    setmessage({...message,[e.target.name]:e.target.value})

  }

  const [teacher,setTeacher]  = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = ()=>{fetch("http://localhost:8082/teacher",{
      method:'GET',
      headers:{
        'content-Type':'application/json'
      }
    }).then((response) => response.json())
    .then((data) => {
      setTeacher(data);
    }); 
  }

  const handlesubmit = async(e) =>{
      e.preventDefault(e)
      console.log(message)
      if(message.teacherName === "" || message.teacherName === "select teacher"){
        alert("Please Select Your teacher!");
      }
      else{
      const response = await fetch("http://localhost:8083/message",{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({
          studentId:localStorage.getItem('username'),
          teacherId: message.teacherName,
          message: message.studentMessage
        })
      })
      const data = await response.json()
      console.log(data);

      if(data)
      { 
        alert("Message Sent")


      }
      else{
        alert("invalid")
      }
      setmessage({
        teacherName: "",
        studentMessage: "",
      })
    }
  }

  return (
    <>
      <Navbar />
      <FormWrapper>
        <HeadingWrapper>Drop your message</HeadingWrapper>
        <Form onsubmit={handlesubmit}>
          <label id="message">
            <div className="text-left text-xl font-bold ml-2 mb-4">
              Teacher name
            </div>
            <select
              onChange={onchange}
              id="teacherName"
              className="w-full flex flex-row h-fit border p-2 rounded-md"
              name="teacherName"
              required
            >
              <option>select teacher</option>
              {teacher.map((element) => {
            return(
              <option key={element.username} value={element.username}>{element.name}</option>

              
            )
          })}
          
            </select>
          </label>
          <div>
            <label className="flex flex-col gap-5">
              <div className="text-left text-xl font-bold ">
                Enter your message here
              </div>
              <textarea onChange={onchange} name='studentMessage' value={message.studentMessage} className="resize-none border w-full p-2 rounded-md required"></textarea>
            </label>
          </div>
          <Button>Submit</Button>
        </Form>
      </FormWrapper>
    </>
  );
};

export default Message;
