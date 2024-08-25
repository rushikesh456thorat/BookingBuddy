
import { Routes, Route} from "react-router-dom";

import './App.css'
import Login from './pages/login/login.jsx';
import SignUp from './pages/signup/signup.jsx';
import ChatApp from "./pages/chatbot/chatapp.jsx";

function App() {


  return (
    <>
     <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<ChatApp/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
