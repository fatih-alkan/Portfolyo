import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Header({
    email = "fatihalkansw@gmail.com",
    github = "https://github.com/fatih-alkan",
    linkedin = "https://www.linkedin.com/in/fatihalkansw",
}) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-6 py-6 bg-dark-bg h-20 fixed left-0 top-0 w-full z-50">

                {/* Logo */}
                <h1 className="text-def-yellow text-2xl font-semibold">
                    Fatih Alkan
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12 text-def-gray">
                    <a href="#home" className="hover:scale-115 hover:text-def-yellow transition-all duration-100">Home</a>
                    <a href="#about" className="hover:scale-115 hover:text-def-yellow transition-all duration-100">About</a>
                    <a href="#resume" className="hover:scale-115 hover:text-def-yellow transition-all duration-100">Resume</a>
                    <a href="#skills" className="hover:scale-115 hover:text-def-yellow transition-all duration-100">Skills</a>
                    <a href="#projects" className="hover:scale-115 hover:text-def-yellow transition-all duration-100">Projects</a>
                </div>

                {/* Desktop Icons */}
                <div className="hidden lg:flex gap-8 text-def-gray">
                    <a href={github} className="hover:scale-125 hover:text-def-yellow transition-all duration-100"><FaGithub size={24} /></a>
                    <a href={linkedin} className="hover:scale-125 hover:text-def-yellow transition-all duration-100"><FaLinkedin size={24} /></a>
                    <a href={`mailto:${email}`} className="hover:scale-125 hover:text-def-yellow transition-all duration-100"><FaEnvelope size={24} /></a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="text-def-gray md:hidden cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes size={26}/> : <FaBars size={26}/>}
                </button>

            </div>

            {/* Mobile Menu (Alt alta açılan menü) */}
            <div className={`laptop:hidden bg-dark-bg w-full fixed top-20 left-0 py-6 z-40 transition-all duration-300 
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}
            `}>
                <div className="flex flex-col gap-6 text-center text-def-gray text-lg">
                    <a onClick={() => setOpen(false)} href="#home" className="hover:text-def-yellow">Home</a>
                    <a onClick={() => setOpen(false)} href="#about" className="hover:text-def-yellow">About</a>
                    <a onClick={() => setOpen(false)} href="#resume" className="hover:text-def-yellow">Resume</a>
                    <a onClick={() => setOpen(false)} href="#skills" className="hover:text-def-yellow">Skills</a>
                    <a onClick={() => setOpen(false)} href="#projects" className="hover:text-def-yellow">Projects</a>
                </div>
            </div>
        </>
    );
}
