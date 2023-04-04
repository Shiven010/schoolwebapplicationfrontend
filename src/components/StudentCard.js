import React from "react";
import {Link} from 'react-router-dom'
import Button from "../components/Button";

const StudentCard = ({link,textMsg , buttonName , icon}) => {
  return (
    <>
      <div className="border  border-slate-300 shadow-sm shadow-slate-400 rounded-[10px] p-4 text-center gap-5 items-center justify-center flex flex-col w-full h-fit">
     <div>{icon}</div>
       <h1 className="text-xl font-medium">{textMsg}</h1>
       <Link className="w-full" to={link} >
      
        <Button>{buttonName}</Button>
       </Link>
     </div>
    </>
  );
};

export default StudentCard;
