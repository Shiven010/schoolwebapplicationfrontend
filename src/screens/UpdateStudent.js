import React from "react";
import Form from "../components/Form";
import FormWrapper from "../components/FormWrapper";
import HeadingWrapper from "../components/HeadingWrapper";
import InputLabel from "../components/InputLabel";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

const StudentReg = () => {
  

  const [student,setStudent]  = useState([]);

  useEffect(() =>{
     fetchData();
  },[]);

  const fetchData = ()=>{fetch(`http://localhost:8081/student/${localStorage.getItem('username')}`,{
      method:'GET',
      headers:{
        'content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => response.json())
    .then((data) => {
      setStudent(data);
      console.log(student);
    }); 
  }

  // const [student, setStudent] = useState({
  //   name: "",
  //   class: "",
  //   guardianname: "",
  //   age: "",
  //   contact: "",
  // });

  const onchange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(student);
    const token = "Bearer "+localStorage.getItem('token')
    const response = await fetch(`http://localhost:8081/student/${localStorage.getItem('username')}`,{
        method:'PUT',
        headers:{
          'content-Type':'application/json',
          'Authorization': token
        },
        body:JSON.stringify({
          name: student.name,
          username: localStorage.getItem('username'),
          std:student.std,
          guardian: student.guardian,
          age: student.age,
          contact: student.contact})
      })
      const data = await response.text()
      console.log(data); 
      if(data)
      { 
        alert("Profile update")
      }
      else{
        alert("invalid Cred")
      }

    // setStudent({
    //   name: "",
    //   class: "",
    //   guardianname: "",
    //   age: "",
    //   contact: "",
    // });
  };

  return (
    <>
      <Navbar />
      <FormWrapper>
        <HeadingWrapper>UPDATE YOUR PROFILE</HeadingWrapper>
        <Form onsubmit={handlesubmit}>
          <InputLabel
            name={"NAME"}
            type="text"
            onchange={onchange}
            value={student.name}
            pattern={"[a-zA-Z]*"}
            statename={"name"}
          />
          <InputLabel
            name={"CLASS"}
            type={"number"}
            onchange={onchange}
            value={student.std}
            statename={"std"}
            min={1}
          />
          <InputLabel
            name={"AGE"}
            type={"number"}
            onchange={onchange}
            value={student.age}
            statename={"age"}
            min={1}
          />
          <InputLabel
            name={"GUARDIAN NAME"}
            type={"text"}
            onchange={onchange}
            value={student.guardian}
            statename={"guardian"}
            pattern={"[a-zA-Z]*"}
          />
          <InputLabel
            name={"CONTACT-NUMBER"}
            type={"tel"}
            onchange={onchange}
            value={student.contact}
            statename={"contact"}
            pattern="[0-9]{10}"
          />
          <Button>SUBMIT</Button>
        </Form>
      </FormWrapper>
    </>
  );
};

export default StudentReg;
