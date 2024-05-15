import React from 'react';
import { AboutMe } from './AboutMe';
import { HeroSection } from './HeroSection';
import { Blog } from './Blog';

function Header() {
    const [activeSection, setActiveSection] = React.useState('home');

    const handleSection = (section) => {
        if (activeSection !== section) {
            setActiveSection(section);
        }
    };

    return (
        <header>
            <div className='flex flex-row justify-between p-8'>
                <p className='text-white items-center text-2xl font-bold'>DiegoDev</p>
                <ul className="justify-end m-8 text-white mt-0 gap-x-8 flex flex-row cursor-pointer">
                    <li onClick={() => handleSection('home')}>Home</li>
                    <li onClick={() => handleSection('about-me')}>About me</li>
                    <li onClick={() => handleSection('blog')}>Blog</li>
                    {/*<li onClick={handleSection('projects')}>Projects</li> */}
                </ul>
            </div>
            <div className="transition-opacity duration-500">
                {activeSection === 'home' && <HeroSection />}
                {activeSection === 'about-me' && <AboutMe />}
                {activeSection === 'blog' && <Blog />}
            </div>
        </header>
    );
}

export { Header };