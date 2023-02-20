import React from 'react';
import Navbar from './Navbar';
import { createContext } from 'react';
import { useState, Suspense } from 'react';

const Movies =  React.lazy(() => import("./Movies.js"));
export const Global = createContext();

const Home = () => {
  const [input, setInput] = useState();
  const getVal = (val) => {
    setInput(val);
  }
  return (
    <Global.Provider value={{getVal:getVal}}>
      <>
        <Navbar/>
        <Suspense fallback={<div>Loading</div>}>
          <Movies val={input}/>
			</Suspense>
      </>
    </Global.Provider>
  )
}

export default Home