import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { IStaticMethods } from 'flyonui/flyonui';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function GoAddfursuit() {
  const Fursuit = () => {
    const URL = 'addfursuit.html';
    window.open(URL, '_blank');
  }
  return (
    <button onClick={Fursuit} 
    className="fixed bg-green-800 hover:bg-green-900 text-center text-white font-bold right-10 bottom-8 w-14 h-14 rounded-full">
      +
    </button>
  );
}
const root = document.getElementById('AddFursuit');
root && ReactDOM.render(<GoAddfursuit />, root);

function App() {
  const location = useLocation();

  return (
    <>
          
          
  <div className="relative container 2xl h-20 flex items-center justify-between bg-green-800 min-w-full text-white font-mono">
    <div className='flex items-center'>
      <button className="hover:bg-green-900 text-3xl h-20 w-32 text-white font-bold">
        ☰
      </button>
    </div>
    <div className="flex items-start mx-4 flex-col">
      <div className="font-bold text-2xl">
        FurniiBox
      </div>
      <div className="text-sm font-semibold">
        Furry Box for furries! Finding friends and fursuiters!
      </div>
    </div>
    

    <div className='flex items-center space-x-4 ml-auto'>
      <input
        type="text"
        placeholder="&#x1F50E;&#xFE0E; Search..."
        className="border-4 border-white px-2 py-1 rounded text-white hover:placeholder:opacity-0 focus:placeholder-opacity-0 placeholder:transition-all duration-300 ease-in-out"
      />
      
      <div className='flex items-center'>
        <button className="hover:bg-green-700 text-white font-bold px-2 py-2 rounded">
          TH
        </button>
        <button className="hover:bg-green-700 text-white font-bold px-2 py-2 rounded">
          EN
        </button>
      </div>
      <div className='flex items-center space-x-2'>
        <button className="bg-green-900 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
          Login
        </button>
        <button className="bg-green-900 hover:bg-green-900 text-white font-bold px-4 py-2 rounded">
          Register
        </button>
      </div>
    </div>
  </div>

  <div className="container rounded-br-lg rounded-bl-lg 2xl h-14 flex justify-between bg-green-900 min-w-full text-white font-mono px-0">
    <div className='flex items-center space-x-4'>
      <button className="rounded-bl-lg bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
        Fursuiters
      </button>
      <button className="bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
        Furries
      </button>
      <button className="bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
        Handlers
      </button>
      <button className="bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
        Photographers
      </button>
      <button className="rounded-br-lg bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
        About us
      </button>
    </div>
  </div>
  <div id='AddFursuit'></div>
  
  <div className="min-w-full columns-2 sm:columns-3 md:columns-4 lg:columns-6 border-4 gap-3 bg-gray-300 rounded-xl mx-4 my-4">  
    
    <img className="border-black border-4" src="WWWWWWWW.png" />
    <img className="min-h-96 border-4 " src="bg1.png" />
    <img className="border-4" src="WWWWWWWW.png" />
    <img className="min-h-80 border-4" src="WWWWWWWW.png" />
    <img className="border-4" src="WWWWWWWW.png" />
    <img className="border-4" src="WWWWWWWW.png" />
    <img className="border-4 min-h-72" src="WWWWWWWW.png" />
    <img className="border-4" src="WWWWWWWW.png" />
    <img className="border-4 min-h-96" src="bg1.png" />

    
  </div>
    
  </>

    
    
  );
}

export default App;
