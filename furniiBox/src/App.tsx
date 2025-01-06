import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IStaticMethods } from 'flyonui/flyonui';
import ReactDOM from 'react-dom';
import { eventOnClickAddFursuit } from './components/gallery.component';
//import { eventOnClickAddFursuit, GalleryComponent, GetTwitter } from './components/gallery.component';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);


  const [isOpen, setIsOpen] = useState(false);


  return (
    <>

      <div className='min-h-screen bg-base-200/60'>

        <div className="sticky z-10 top-0 container 2xl h-20 flex items-center lg:justify-between bg-green-800 min-w-full text-white font-mono">
          <div className='flex items-center'>

            <button 
            id='menu' 
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-green-900 text-3xl h-20 w-32 text-white font-bold" 
            aria-expanded={isOpen ? 'true' : 'false'}
            >
              ☰
            </button>

            <div
              id="menuofburger"
              className={`transition-all duration-700 fixed container lg:w-1/5 h-screen z-50 top-0 
                ${isOpen ? 'left-0' : '-left-full'} w-2/5 bg-green-900`}
            >
              <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>Profile</button>
              <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>Friends</button>
              <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>Setting</button>
              <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>About us</button>
            </div>

            {isOpen && (
              <>
              <div
                id="hiddenmenuofburger"
                className={`fixed w-full h-screen top-0 bg-black ${isOpen ? 'opacity-40' : 'opacity-0'} transition-all duration-700 ease-in-out`}
                onClick={() => setIsOpen(false)}
              ></div>
              </>
              
            )}


            {/* {
              isOpen ? (
                <>
                    <div id='menuofburger' 
                    className='transition-all duration-300 fixed container lg:w-1/5 h-screen z-50 top-0 w-2/5 bg-green-900'>
                      <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>Profile</button>
                      <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>Friends</button>
                      <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>Setting</button>
                      <button className='bg-green-900 hover:bg-green-800 text-white font-bold w-full h-20'>About us</button>
                    </div>
                    
                    <div id='hiddenmenuofburger' className='right-3/5 fixed w-full h-screen top-0 bg-black opacity-40' 
                    onClick={() => setIsOpen(!isOpen)}></div>
                  
                </>
              ) : null
            } */}



            <div className="flex items-start mx-4 flex-col">
              <div className="font-bold text-2xl">
                FurniiBox
              </div>
              <div className="text-sm font-semibold">
                Furry Box for furries! Finding friends and fursuiters!
              </div>
            </div>


            <div className='hidden lg:flex  items-center space-x-4 ml-auto'>
              <input
                type="text"
                placeholder="&#x1F50E;&#xFE0E; Search..."
                className="border-4 border-white px-2 py-1 rounded text-white hover:placeholder:opacity-0 focus:placeholder-opacity-0 placeholder:transition-all duration-300 ease-in-out"
              />

              <div className='flex h-9 gap-1 items-center'>
                <button className="hover:bg-green-700 text-white font-bold px-2 py-2 rounded">
                  TH
                </button>
                <button className="border-2  hover:bg-green-700 text-white font-bold px-2 py-2 rounded">
                  EN
                </button>
              </div>
              <div className='flex pr-4 items-center gap-2'>
                <button className="bg-green-900 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Login
                </button>
                <button className="bg-green-900 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Register
                </button>
              </div>
            </div>


          </div>
        </div>


        <div className="container overflow-scroll [&::-webkit-scrollbar]:hidden	 rounded-br-lg rounded-bl-lg 2xl h-14 flex justify-between bg-green-900 min-w-full text-white font-mono px-0">
          <div className='flex items-center space-x-4'>
            <button className="md:w-48 rounded-bl-lg bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
              Fursuiters
            </button>
            <button className="md:w-48 bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
              Furries
            </button>
            <button className="md:w-48 bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
              Handlers
            </button>
            <button className="md:w-48 bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
              Photographers
            </button>
            <button className="md:w-48 rounded-br-lg bg-green-900 hover:bg-green-800 text-center text-white font-bold h-14 w-64">
              About us
            </button>
          </div>
        </div>

        <button
          id='AddFursuit'
          onClick={eventOnClickAddFursuit}
          className="fixed bg-green-800 hover:bg-green-900 text-center text-white font-bold bottom-10 z-10 right-10 m-3 p-2 h-14 w-14 rounded-full">
          +
        </button>


        <div className="max-w-screen-2xl mx-auto items-center">

        <div className="columns-2 md:columns-3 lg:columns-5 xl:columns-5 gap-4 p-4">
          <div className="break-inside-avoid mb-4">
            <div className="card shadow-none bg-base-200/60 sm:max-w-sm">
              <div className="container bg-white rounded-xl shadow">
                <figure><img src="https://pbs.twimg.com/media/GCtIzLqbQAACqE1?format=jpg&name=large" alt="Watch" /></figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">RENKONNN</h5>
                  <p className="mb-4"> Renko Tora.
                    <br></br>SSSSSSSSSSSSSsss
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Open</button>
                    <button className="btn btn-secondary btn-soft"><img src='x-social-media-black-icon.png' className='w-4 h-4' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid mb-4">
            <div className="card shadow-none bg-base-200/60 sm:max-w-sm">
              <div className="container bg-white rounded-xl shadow">
                <figure><img src="WWWWWWWW.png" alt="Watch" /></figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Zephyr Brushstroke</h5>
                  <p className="mb-4">Stay connected, motivated, and healthy with the latest Apple Watch.</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Open</button>
                    <button className="btn btn-secondary btn-soft"><img src='x-social-media-black-icon.png' className='w-4 h-4' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid mb-4">
            <div className="card shadow-none bg-base-200/60 sm:max-w-sm">
              <div className="container bg-white rounded-xl shadow">
                <figure><img src="https://i.pinimg.com/736x/63/31/59/6331597fdd3085b0b7f3ff71a7bf5938.jpg" alt="Watch" /></figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Echo Dreamscape</h5>
                  <p className="mb-4">Stay connected, motivated, and healthy with the latest Apple Watch.</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Open</button>
                    <button className="btn btn-secondary btn-soft"><img src='x-social-media-black-icon.png' className='w-4 h-4' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid mb-4">
            <div className="card shadow-none bg-base-200/60 sm:max-w-sm">
              <div className="container bg-white rounded-xl shadow">
                <figure><img src="https://i.pinimg.com/736x/da/c6/dd/dac6ddc3014df3df7dac9bb822f72633.jpg" alt="Watch" /></figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Nova Pawprints</h5>
                  <p className="mb-4">Stay connected, motivated, and healthy with the latest Apple Watch.</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Open</button>
                    <button className="btn btn-secondary btn-soft" ><img src='x-social-media-black-icon.png' className='w-4 h-4' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid mb-4">
            <div className="card shadow-none bg-base-200/60 sm:max-w-sm">
              <div className="container bg-white rounded-xl shadow">
                <figure><img src="https://i.pinimg.com/736x/da/c6/dd/dac6ddc3014df3df7dac9bb822f72633.jpg" alt="Watch" /></figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Nova Pawprints</h5>
                  <p className="mb-4">Stay connected, motivated, and healthy with the latest Apple Watch.</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Open</button>
                    <button className="btn btn-secondary btn-soft" ><img src='x-social-media-black-icon.png' className='w-4 h-4' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid mb-4">
            <div className="card shadow-none bg-base-200/60 sm:max-w-sm">
              <div className="container bg-white rounded-xl shadow">
                <figure><img src="https://i.pinimg.com/736x/da/c6/dd/dac6ddc3014df3df7dac9bb822f72633.jpg" alt="Watch" /></figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Nova Pawprints</h5>
                  <p className="mb-4">Stay connected, motivated, and healthy with the latest Apple Watch.</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Open</button>
                    <button className="btn btn-secondary btn-soft" ><img src='x-social-media-black-icon.png' className='w-4 h-4' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid mb-4">
            <div className="card shadow-none bg-base-200/60 sm:max-w-sm">
              <div className="container bg-white rounded-xl shadow">
                <figure><img src="https://i.pinimg.com/736x/da/c6/dd/dac6ddc3014df3df7dac9bb822f72633.jpg" alt="Watch" /></figure>
                <div className="card-body">
                  <h5 className="card-title mb-2.5">Nova Pawprints</h5>
                  <p className="mb-4">Stay connected, motivated, and healthy with the latest Apple Watch.</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Open</button>
                    <button className="btn btn-secondary btn-soft" ><img src='x-social-media-black-icon.png' className='w-4 h-4' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </div>
        </div>
      </div>


    </>
  );
}

export default App;
