
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import { Container } from "react-bootstrap";
import {ToastContainer} from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Header/>
      <ToastContainer autoClose={2000}/>
      <Container>
        <Outlet/>
      </Container>
      
    </>
  )
}

export default App
