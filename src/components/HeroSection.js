import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function HeroSection() {
    return (
        <div className="">
            <div className="text-white p-52 justify-start">
                <h2 className='text-3xl mb-4 font-bold'>Hola, soy Diego Sanhueza 👋</h2>
                <h2 className='text-xl'>Estudiante de ingenieria informatica con ansias de aprender, de Punta Arenas, el extremo sur de nuestro planeta al mundo entero 🌎.</h2>
                <div className="flex flex-row text-white space-x-24 pt-12">
                    <button className="border b-2 rounded-full p-2 px-8 cursor-pointer hover:scale-110 transition-transform duration-300 flex flex-row items-center" href="https://www.linkedin.com/in/diego-sanhueza-ag/">
                        <FaLinkedin className='mr-2 text-blue-500' size={24} /> <a href='https://www.linkedin.com/in/diego-sanhueza-ag/' target="_blank">Linkedin </a></button>
                    <button className="border b-2 rounded-full p-2 px-8 cursor-pointer hover:scale-110 transition-transform duration-300 flex flex-row items-center">
                        <FaGithub className='mr-2' size={24} /><a href='https://github.com/Diego0119' target="_blank" >Github</a></button>
                    <button className="border b-2 rounded-full p-2 px-8 cursor-pointer hover:scale-110 transition-transform duration-300 flex flex-row items-center">
                        <SiGmail className="mr-2" size={24} /><a href='mailto:diegosanhuezaaguilar@gmail.com' target="_blank" >diegosanhuezaaguilar@gmail.com</a></button>
                </div>
            </div>

        </div >

    );
}

export { HeroSection };