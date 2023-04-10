import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./screens/Signup";
import TeacherReg from "./screens/TeacherReg";
import StudentReg from "./screens/StudentReg";
import UpdateStudent from "./screens/UpdateStudent";
import StudentLandingPage from "./screens/StudentLandingPage";
import Leave from "./screens/Leave";
import Pay from "./screens/Pay";
import Message from "./screens/Message";

function App() {



  return (
    <>
     <Router>
     <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/student" element={<StudentReg />} />
            <Route exact path="/studentprofileupdate" element={<UpdateStudent/>} />
            <Route exact path="/teacher" element={<TeacherReg />} />
            {localStorage.getItem('token')?
            <Route exact path="/studenthome" element={<StudentLandingPage/>} />:
            <Route exact path="/" element={<Home />} />}
            <Route exact path="/leave" element={<Leave/>} />
            <Route exact path="/pay" element={<Pay/>} />
            <Route exact path="/message" element={<Message/>} />
          </Routes>
     </Router>
     
    </>
  );
}

export default App;
