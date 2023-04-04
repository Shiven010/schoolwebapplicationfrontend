import React from 'react'
import Navbar from '../components/Navbar'
import CarWrapper from '../components/CardWrapper'
import TeacherCard from '../components/TeacherCard'
import { useEffect } from 'react'
import { useState } from 'react'





const Home = () => {
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
  return (
    <>
        <Navbar/>
        <CarWrapper>
          {teacher.map((element) => {
            return(
              <TeacherCard key={element.username} 
              name={element.name} 
              email={element.username} 
              age={element.age} 
              subject={element.subject} 
              experience={element.experience} />

            )
          })}
        </CarWrapper>
    </>
  )
}

export default Home