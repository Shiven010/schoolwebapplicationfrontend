import React from "react";
import Navbar from "../components/Navbar";
import CardWrapper from "../components/CardWrapper";
import StudentCard from "../components/StudentCard";
import {FcLeave} from 'react-icons/fc'
import {MdPayment , MdOutlineMessage , MdSupervisedUserCircle} from 'react-icons/md'

const StudentLandingPage = () => {
  return (
    <>
      <Navbar />
     <CardWrapper>
    <StudentCard link={'/leave'} textMsg={'Now you can apply for leave from student dashboard'} buttonName={'Apply'} icon={<FcLeave  size={45}/>} />
    <StudentCard link={'/pay'} textMsg={'Now you can pay your dues from student dashboard'} buttonName={'Pay'} icon={<MdPayment color="green" size={45}/>} />
    <StudentCard link={'/message'} textMsg={'Now you can drop message to teacher  from student dashboard'} buttonName={'Drop Message'} icon={<MdOutlineMessage color="green" size={45}/>} />
    <StudentCard link={'/studentprofileupdate'} textMsg={'Now you can update your profile  from student dashboard'} buttonName={'Update'} icon={<MdSupervisedUserCircle color='green' size={45}/>} />




     </CardWrapper>
    </>
  );
};

export default StudentLandingPage;
