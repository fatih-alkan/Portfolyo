// Programming Languages
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {  SiTailwindcss } from "react-icons/si";

export default function Framework() {
    return (
        <>
            {/* Card 1 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <FaReact size={32} />
                <p className="text-def-yellow font-semibold">React JS</p>
            </div>
            {/* Card 2 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <FaNodeJs size={32} />
                <p className="text-def-yellow font-semibold">Node JS</p>
            </div>
            {/* Card 3 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <FaBootstrap size={32} />
                <p className="text-def-yellow font-semibold">Bootstrap</p>
            </div>
            {/* Card 4 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <SiTailwindcss size={32} />
                <p className="text-def-yellow font-semibold">Tailwind CSS</p>
            </div>
        </>
    )
}