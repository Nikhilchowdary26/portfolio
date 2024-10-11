import React from 'react';

const Navbar = ({ image, activeSection }) => {
    return (
        <div className="navbar fixed h-screen w-[15vw] bg-gray-900 text-white p-6">
            <div className="profile flex flex-col items-center mb-8">
                <img src={image} alt="profile" className="rounded-full h-24 w-24 mb-4" />
                <h2 className="text-lg font-semibold">Your Name</h2>
            </div>
            <nav>
                <ul className="flex flex-col gap-4">
                    <li>
                        <a href="#about" className={`hover:text-gray-400 ${activeSection === 'about' ? 'text-blue-500' : ''}`}>About</a>
                    </li>
                    <li>
                        <a href="#projects" className={`hover:text-gray-400 ${activeSection === 'projects' ? 'text-blue-500' : ''}`}>Projects</a>
                    </li>
                    <li>
                        <a href="#experience" className={`hover:text-gray-400 ${activeSection === 'experience' ? 'text-blue-500' : ''}`}>Experience</a>
                    </li>
                    <li>
                        <a href="#education" className={`hover:text-gray-400 ${activeSection === 'education' ? 'text-blue-500' : ''}`}>Education</a>
                    </li>
                    {/* Add more links if necessary */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;