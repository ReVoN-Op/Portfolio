import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Project = () => {
  return (
    <>
      <Navbar />
      
      <div className="flex flex-col items-center justify-center mt-[22svmin] text-white px-4">
        <h1 className="text-4xl font-bold mb-4">
          My Recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-md text-gray-300">
          Here are a few projects that I worked on recently:
        </p>
      </div>

      <div className="flex gap-[10vmin] flex-row justify-center pt-[10vmin] pb-[15vmin]">
        
        <div className="w-[50vmin] h-[65vmin] shadow-lg shadow-purple-500 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center relative">
          <div>
            <img 
              src="/images/doodle.png" 
              className="w-[80%] rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 h-[30vmin] opacity-75 pt-[4vmin] mix-blend-multiply" 
            />
          </div>
          <h2 className="text-2xl text-white pt-[28vmin]">Doodle Jump</h2>
          <p className="text-white pt-[3vmin] px-[10%] text-center">
            I created a Doodle Jump game with HTML, CSS, and JavaScript. The game features a jumping character that lands on platforms and avoids obstacles.
          </p>
          <div className='flex flex-row justify-center pt-[3vmin] gap-[4vmin]'>
            <a href="https://github.com/ReVoN-Op/doodlejump" target>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded h-[5vmin] w-[15vmin] ">Github</button>
            </a>
            <a href="https://revon-op.github.io/doodlejump/" target>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded h-[5vmin] w-[15vmin] ">Demo</button>
            </a>
            
          </div>
        </div>
                        {/* project 2 */}
        <div className="w-[50vmin] h-[65vmin] shadow-lg shadow-purple-500 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center relative">
          <div>
            <img 
              src="/images/tiktaktoe.png" 
              className="w-[60%] rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 h-[30vmin] opacity-75 pt-[4vmin] mix-blend-multiply" 
            />
          </div>
          <h2 className="text-2xl text-white pt-[28vmin]">Tic Tac Toe</h2>
          <p className="text-white pt-[3vmin] px-[10%] text-center">
          I created a Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game automatically detects winning combinations, and displays the result.
          </p>
          <div className='flex flex-row justify-center pt-[3vmin] gap-[4vmin]'>
            <a href="https://github.com/ReVoN-Op/tic-tak-toe" target>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded h-[5vmin] w-[15vmin] ">Github</button>
            </a>
            <a href="https://revon-op.github.io/tic-tak-toe/" target>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded h-[5vmin] w-[15vmin] ">Demo</button>
            </a>
            
          </div>
        </div>
                             {/* project3 */}
        <div className="w-[50vmin] h-[65vmin] shadow-lg shadow-purple-500 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center relative">
          <div>
            <img 
              src="/images/calculator.png" 
              className="w-[80%] rounded-lg absolute top-0 left-1/2 transform -translate-x-1/2 h-[30vmin] opacity-75 pt-[4vmin] mix-blend-multiply" 
            />
          </div>
          <h2 className="text-2xl text-white pt-[28vmin]">Calculator</h2>
          <p className="text-white pt-[3vmin] px-[10%] text-center">
            I created calculator with HTML, CSS, and JavaScript. To solve basic calculations and do maths. Dont study Maths!.
          </p>
          <div className='flex flex-row justify-center pt-[3vmin] gap-[4vmin]'>
            <a href="hhttps://github.com/ReVoN-Op/calculator" target>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded h-[5vmin] w-[15vmin] ">Github</button>
            </a>
            <a href="https://revon-op.github.io/calculator/" target>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded h-[5vmin] w-[15vmin] ">Demo</button>
            </a>
            
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default Project;
