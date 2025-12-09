import { FaGithub } from "react-icons/fa";

export default function Project() {
    const projects = [
        {
            title: "Twitter-API (Spring Boot – PostgreSQL – React)",
            desc: "Backend system built with Spring Boot using the Twitter API, with secure PostgreSQL storage and a dynamic React frontend.",
            url: "https://github.com/fatih-alkan/Twitter_Api"
        },
        {
            title: "LibrarySystem (Java – OOP – Console App)",
            desc: "Console-based library system using Java OOP and Singleton pattern, supporting book borrowing/return and user roles.",
            url: "https://github.com/fatih-alkan/Java-s15-LibrarySystem"
        },
        {
            title: "BeuFace (Python – OpenCV – Real-Time Detection)",
            desc: "Real-time face detection and tracking app built with Python, OpenCV, and deep learning in a modular, scalable structure.",
            url: "https://github.com/fatih-alkan/BeuFACE"
        },
        {
            title: "E-Commerce (Vite – React)",
            desc: "A fully responsive e-commerce interface with API integration, dynamic product listing, and a modern component-based design.",
            url: "https://fatihalkan-eticaret.vercel.app"
        },
        {
            title: "Pizza App (React)",
            desc: "A clean and modern pizza ordering interface designed with React, offering visually appealing product cards and smooth user experience.",
            url: "https://fatihalkan-pizza.vercel.app"
        },
        {
            title: "Course Registration App (C# – SQLite – Form)",
            desc: "C# course registration system supporting student/advisor roles, course selection, approval flow, and CSV export.",
            url: "https://github.com/fatih-alkan/Ders_Kayit_Sistemi"
        }
    ];

    return (
        <>
            <div className="w-full min-h-screen bg-dark-bg px-6 py-20">
                <h1 className="text-center text-4xl md:text-5xl text-white font-bold mb-14">
                    My Projects
                </h1>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

                    {projects.map((p, i) => (
                        <a
                            key={i}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-soft-bg rounded-2xl p-10 text-center hover:shadow-xl 
                                       hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                       hover:scale-105 transition-all duration-300 cursor-pointer block"
                        >
                            {/* GitHub Icon */}
                            <div className="w-20 h-20 mx-auto rounded-2xl mb-6 
                                            flex items-center justify-center
                                            bg-linear-to-br from-indigo-400 to-indigo-600">
                                <FaGithub size={40} />
                            </div>

                            <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
                                {p.title}
                            </h2>

                            <p className="text-[#ccff00] text-sm leading-relaxed">
                                {p.desc}
                            </p>
                        </a>
                    ))}

                </div>
            </div>
        </>
    );
}
