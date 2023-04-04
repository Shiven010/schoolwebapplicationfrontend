import React from "react";
import Form from "../components/Form";
import FormWrapper from "../components/FormWrapper";
import HeadingWrapper from "../components/HeadingWrapper";
import InputLabel from "../components/InputLabel";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";

const StudentReg = () => {
  const [regdata, setregdata] = useState({
      name: "",
      username: "",
      class: "",
      guardianname: "",
      age: "",
      contact: "",
      password:""
  });

  const onchange = (event) => {
    setregdata({ ...regdata, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const token = "Bearer "+localStorage.getItem('token')
    console.log(token)
    console.log(regdata);
    const response = await fetch("http://localhost:8086/admin/students/add",{
        method:'POST',
        headers:{
          'content-Type':'application/json',
          'Authorization': token
        },
        body:JSON.stringify({
          name: regdata.name,
          username: regdata.username,
          password:regdata.password,
          std:regdata.class,
          guardian: regdata.guardianname,
          age: regdata.age,
          contact: regdata.contact,})
      })
      const data = await response.json()
      console.log(data); 
      if(data)
      { 
        alert("Student added")


      }
      else{
        alert("invalid")
      }

    setregdata({
      name: "",
      username: "",
      class: "",
      guardianname: "",
      age: "",
      contact: "",
      password:""
    });
  };

  return (
    <>
      <Navbar />
      <FormWrapper>
        <HeadingWrapper>STUDENT REGISTRATION</HeadingWrapper>
        <Form onsubmit={handlesubmit}>
          <InputLabel
            name={"NAME"}
            type={"text"}
            onchange={onchange}
            value={regdata.name}
            statename={"name"}
            pattern={"[a-zA-Z]*"}
          />
          <InputLabel
            name={"STUDENT- EMAIL ID"}
            type={"email"}
            onchange={onchange}
            value={regdata.username}
            statename={"username"}
          />
          <InputLabel
            name={"PASSWORD"}
            type={"password"}
            onchange={onchange}
            value={regdata.password}
            statename={"password"}
          />
          <InputLabel
            name={"CLASS"}
            type={"number"}
            onchange={onchange}
            value={regdata.class}
            statename={"class"}
            min={1}
          />
          <InputLabel
            name={"AGE"}
            type={"number"}
            onchange={onchange}
            value={regdata.age}
            statename={"age"}
            min={1}
          />
          <InputLabel
            name={"GUARDIAN NAME"}
            type={"text"}
            onchange={onchange}
            value={regdata.guardianname}
            statename={"guardianname"}
            pattern={"[a-zA-Z]*"}
          />
          <InputLabel
            name={"CONTACT-NUMBER"}
            type={"tel"}
            onchange={onchange}
            value={regdata.contact}
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
