import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Resume = () => {
    return (
        <>
        <Navbar />
        <div className='flex justify-center pt-[15vmin]'>
        <a href="resume.pdf" download="resume.pdf" class="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300 w-[30vmin] text-center">
           Download PDF
        </a>
        </div>
        <div className="flex flex-row justify-center pt-[10vmin] pb-[15vmin]">
           <img src="/public/images/resumepic.jpg" className="w-[70vw] h-full opacity-75" />
        </div>



        <Footer className="w-full " />
        </>
    )
}
export default Resume; 