import React from "react";
import FormWrapper from "../components/FormWrapper";
import Form from "../components/Form";
import HeadingWrapper from "../components/HeadingWrapper";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [page, setpage] = useState("teacher");
  const onchange = (event) => {
    setpage(event.target.value);
  };
  return (
    <>
      <Navbar />
      <FormWrapper>
        <HeadingWrapper>Welcome to Registration</HeadingWrapper>
        <Form>
          <label htmlFor="prefernce">
            <div className="flex items-center font-bold  flex-row gap-1 ">
              Registration Prefernce:
            </div>
            <select
              onChange={onchange}
              id="prefernce"
              data-te-select-init
              className="border mt-4 p-2 w-full focus:outline-none border-gray-300"
            >
              <option value="teacher">TEACHER</option>
              <option value="student">STUDENT</option>
            </select>
          </label>

          <Link to={`/${page}`}>
            <Button>REGISTER</Button>
          </Link>
        </Form>
      </FormWrapper>
    </>
  );
};

export default Signup;
