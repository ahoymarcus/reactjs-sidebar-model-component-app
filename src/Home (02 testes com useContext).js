import React, { useContext } from 'react';

import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';



const Home = () => {
  /* 
    Testando dois métodos de uso para useContext:
    1. useContext(AppContext)
    2. useGlobalContext()
  */
  //const data = useContext(AppContext);
  const data = useGlobalContext();
  console.log(data);


  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">
        Show Modal
      </button>
    </main>
  );
}



export default Home


