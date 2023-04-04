import React from "react";
import Button from "../components/Button";
import HeadingWrapper from "../components/HeadingWrapper";
import Navbar from "../components/Navbar";
import FormWrapper from "../components/FormWrapper";
import Form from "../components/Form";
import InputLabel from "../components/InputLabel";
import { useState } from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const [credentials, setcredentials] = useState({ username: "", password: "", preference: "ADMIN" })

  let navigate = useNavigate();

  const onchange = (event) => {

    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(credentials);
    {if(credentials.preference === "ADMIN") {
      const response = await fetch("http://localhost:8086/admin/authenticate", {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({ username: credentials.username, password: credentials.password })
      })
      const token = await response.text()
      console.log(token);
      if (token) {
        localStorage.setItem('token', token)
        navigate("/signup")

      }
      else {
        alert("invalid")
      }
    }
    else if (credentials.preference === "STUDENT") {
      const response = await fetch("http://localhost:8081/student/authenticate", {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({ username: credentials.username, password: credentials.password })
      })
      const token = await response.text()
      console.log(token);
      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('username', credentials.username)
        console.log(localStorage.getItem('username'))
        navigate("/studenthome")

      }
      else {
        alert("invalid")
      }
    }
  }
  }
  return (
    <>
      <Navbar />
      <FormWrapper>
        <HeadingWrapper>LOGIN</HeadingWrapper>
        <Form onsubmit={handleSubmit}>

          <InputLabel name={'USERNAME'} type={'email'} onchange={onchange} value={credentials.username} statename={"username"} />

          <InputLabel name={'PASSWORD'} type={'password'} onchange={onchange} value={credentials.password} statename={"password"} />

          <label htmlFor="prefernce flex-col ">
            <div className="flex items-center font-bold  flex-row gap-1 ">
              {" "}
              Login preference:
            </div>
            <select
              onChange={onchange}
              name='preference'
              id="preference"
              data-te-select-init
              className="border mt-4 p-2 w-full focus:outline-none border-gray-300"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="STUDENT">STUDENT</option>
            </select>
          </label>

          <Button type={'submit'} >LOGIN</Button>
        </Form>
      </FormWrapper>
    </>
  );
};
export default Login;
