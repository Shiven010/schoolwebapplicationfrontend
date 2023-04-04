import React , {useState} from "react";
import Button from "./Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import   {BsList , BsListNested} from 'react-icons/bs'
const Navbar = () => {

  const [nav , setnav] = useState(true)

  const [token,setToken] = useState('')
  let navigate = useNavigate(); 

  const handleLogout =   ()  =>{
    localStorage.clear()
    navigate("/login")
  }

  return (
    <>
    <nav className="w-full h-[80px] p-3 flex flex-row justify-between bg-gradient-to-r from-fuchsia-200 via-slate-50  to-fuchsia-200 items-center bg--400">
      <Link to="/">
        <h1 className="text-2xl text-gray-700 font-bold ">
          STLER ACADEMY
        </h1>

      </Link>

     <div className={"hidden md:flex flex-row gap-5"}>
        {!localStorage.getItem('token')?<>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        </>:<>
        {!localStorage.getItem('token')?
      <Link to="/signup">
      <Button>Sign Up</Button>
    </Link >:
    <div>
          <button className='bg-gradient-to-tr from-blue-400 w-full to-blue-800 hover:bg-gradient-to-tr text-white hover:text-gray-200 hover:rounded-[20px] hover:from-blue-800 hover:to-blue-400 px-5 py-2 rounded-[10px]'onClick={()=>{navigate("/studenthome")}}>Student</button>
      </div>
     }
        <div>
          <button className='bg-gradient-to-tr from-blue-400 w-full to-blue-800 hover:bg-gradient-to-tr text-white hover:text-gray-200 hover:rounded-[20px] hover:from-blue-800 hover:to-blue-400 px-5 py-2 rounded-[10px]'onClick={handleLogout}>Logout</button>
      </div>    
      </>}
        </div>
      <div className="flex md:hidden">
      <BsList size={35} onClick={()=>setnav(!nav)} className={nav===true?"block":'hidden'}/>
      <BsListNested size={35} onClick={()=> setnav(!nav)} className={nav===false?"block":'hidden'}/>
      </div>
    </nav>
    <div className={nav===false?"top-[90px] origin-top transition-all duration-500 z-20 bg-gradient-to-r from-fuchsia-200 via-fuchsia-50 border-b-2 to-slate-200 w-full flex md:hidden flex-col gap-5 p-10 h-fit rounded-b-[10px] ":'hidden'} >
    <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
    </div>
   
</>
  );
};
export default Navbar;
