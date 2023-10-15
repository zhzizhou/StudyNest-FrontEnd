import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import RegisterStudent from "./pages/RegisterStudent";
import Login from "./pages/LoginRouter";
import LoginComponent from "./components/LoginComponent";
import StudentHome from './pages/StudentHome';
import { UnenrollTeacher } from './pages/Admin/UnenrollTeacher';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/RegisterStudent' element={<RegisterStudent />} />
        <Route path="/StudentHome" element={<StudentHome />} />
        <Route path='/Admin/UnenrollTeacher' element={<UnenrollTeacher />} />
      </Routes>

    </>
  );
}

export default App;
