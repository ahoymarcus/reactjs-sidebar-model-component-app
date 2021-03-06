import React, { useContext } from 'react';

import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';



const Home = () => {
  /* 
    Testando dois métodos de uso para useContext:
    1. useContext(AppContext)
    2. useGlobalContext()
    //const data = useContext(AppContext);
    const data = useGlobalContext();
    console.log(data);
  */
  const { openSidebar, openModal } = useGlobalContext();
  


  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
}



export default Home


