import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function HomeBanner({
    email = "fatihalkansw@gmail.com",
    github = "https://github.com/fatih-alkan",
    linkedin = "https://www.linkedin.com/in/fatihalkansw",
}) {
    return (
        <>
            <div className="h-screen bg-dark-bg flex flex-col items-center gap-6 justify-center">
                <h2 className="text-def-yellow text-xl md:text-2xl max-[500px]:text-[18px]">Hi! my name is</h2>
                <h1 className="text-white text-6xl md:text-8xl max-[500px]:text-4xl font-bold">Fatih Alkan.</h1>
                <div className="text-3xl md:text-4xl max-[500px]:text-2xl font-bold text-center text-def-yellow">
                    <Typewriter
                        options={{
                            strings: [
                                "Software Engineer",
                                "Full Stack Developer"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 40,
                            delay: 60,
                        }}
                    />
                </div>
                <div className="my-4">
                    <a className="py-4 px-8 bg-soft-bg text-white rounded-4xl font-semibold hover:text-dark-bg hover:bg-def-yellow transition-all duration-500 hover:scale-120"
                        href="/fatihalkancv.pdf"
                        download="fatihalkancv.pdf">Download CV</a>
                </div>

                <div className="flex gap-16 text-white">
                    <a href={github} className="hover:text-def-yellow hover:scale-130 transition-all duration-300"><FaGithub size={32} /></a>
                    <a href={linkedin} className="hover:text-def-yellow hover:scale-130 transition-all duration-300"><FaLinkedin size={32} /></a>
                    <a href={`mailto:${email}`} className="hover:text-def-yellow hover:scale-130 transition-all duration-300"><FaEnvelope size={32} /></a>
                </div>
            </div>
        </>
    )
}