import React, { useState } from "react";
import Logo from '../assets/logo1.png';
import Logo2 from '../assets/kevinRushLogo.png';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px]  top-0.5 relative flex justify-between items-center  text-gray-300">
            <div>
                <img src={Logo2} alt="logo img" style={{ width: '50px' }} />
            </div>

            <ul className="hidden md:flex ">
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="menu-item ...">
                        Home
                    </Link></li>
                <li> <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="menu-item ...">
                    About
                </Link></li>
                <li> <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="menu-item ...">
                    Skills
                </Link>
                    </li>
                <li>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        className="menu-item ...">
                        Work
                    </Link>
                    </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="menu-item ...">
                        Contact
                    </Link>
                    </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute inset-0 top-0 bg-gray-900 left-16 w-full h-screen flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="menu-item ...">
                        Home
                    </Link></li>
                <li className="py-6 text-4xl"> <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="menu-item ...">
                    About
                </Link></li>
                <li className="py-6 text-4xl"> <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="menu-item ...">
                    Skills
                </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        className="menu-item ...">
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="menu-item ...">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
