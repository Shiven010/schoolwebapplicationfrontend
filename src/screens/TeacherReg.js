import React,{useState} from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import FormWrapper from '../components/FormWrapper'
import HeadingWrapper from '../components/HeadingWrapper'
import InputLabel from '../components/InputLabel'
import Navbar from '../components/Navbar'



const TeacherReg = () => {
  const [regdata, setregdata] = useState({
    name: "",
    password: "",
    subject: "",
    age: "",
    email: "",
    experience: "",
  });

  const token = "Bearer "+localStorage.getItem('token')


  const onchange =  (event) => {
    setregdata({ ...regdata, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(regdata);

    const response = await fetch("http://localhost:8086/admin/teacher/add",{
      method:'POST',
      headers:{
        'content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({
        name: regdata.name,
        username: regdata.email,
        password: regdata.password,
        subject: regdata.subject,
        experience: regdata.experience,
        age: regdata.age,
        })
    })
    const data = await response.json()
    console.log(data); 
    if(data)
    { 
      alert("Teacher added")


    }
    else{
      alert("invalid")
    }
    setregdata({
      name: "",
    password: "",
    subject: "",
    age: "",
    email: "",
    experience: "",
    });
  };

  return (
    <>
    <Navbar/>
    <FormWrapper>
    <HeadingWrapper>TEACHER REGISTRATION</HeadingWrapper>
    <Form onsubmit={handlesubmit}>
   <InputLabel name={"NAME"} type={"text"} value={regdata.name} statename={"name"} onchange={onchange} pattern={"[a-zA-Z]*"} />
   <InputLabel name={"EMAIL"} type={"email"} value={regdata.email} statename={"email"} onchange={onchange}/>
   <InputLabel name={"PASSWORD"} type={"password"}  value={regdata.password} statename={"password"} onchange={onchange}/>
   <InputLabel name={"SUBJECT"} type={"text"} value={regdata.subject} statename={"subject"} onchange={onchange} pattern={"[a-zA-Z]*"}/>
   <InputLabel name={"AGE"} type={"number"} value={regdata.age} statename={"age"} onchange={onchange} min={1}/>
   <InputLabel name={"EXPERIENCE"} type={"number"} value={regdata.experience} statename={"experience"} onchange={onchange} min={1}/>
<Button type={'submit'}>SUBMIT</Button>
    </Form>
    </FormWrapper>
    </>
  )
}

export default TeacherReg