// Programming Languages
import { FaJava, FaCode, FaPython } from "react-icons/fa";
import { SiSpringboot, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
export default function Languages() {
    return (
        <>
            {/* Card 1 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 snap-start">
                <FaJava size={32} />
                <p className="text-def-yellow font-semibold">Java</p>
            </div>
            {/* Card 2 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 snap-start">

                <SiSpringboot size={32} />
                <p className="text-def-yellow font-semibold">Spring Boot</p>
            </div>
            {/* Card 3 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 scroll-snap-start">

                <FaCode size={32} />
                <p className="text-def-yellow font-semibold">C#</p>
            </div>
            {/* Card 4 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 scroll-snap-start">

                <FaPython size={32} />
                <p className="text-def-yellow font-semibold">Python</p>
            </div>
            {/* Card 5 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 scroll-snap-start">

                <SiJavascript size={32} />
                <p className="text-def-yellow font-semibold">JavaScript</p>
            </div>
            {/* Card 6 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 scroll-snap-start">

                <SiHtml5 size={32} />
                <p className="text-def-yellow font-semibold">HTML</p>
            </div>
            {/* Card 7 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 scroll-snap-start">

                <SiCss3 size={32} />
                <p className="text-def-yellow font-semibold">CSS</p>
            </div>
            {/* Card 8 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
                                shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
                                hover:scale-105 transition-all duration-300 text-white cursor-pointer
                                shrink-0 scroll-snap-start">

                <TbFileTypeSql size={32} />
                <p className="text-def-yellow font-semibold">SQL</p>
            </div>
        </>
    )
}