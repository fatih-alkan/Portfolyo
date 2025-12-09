// Programming Languages
import { FaGit } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
export default function Tools() {
    return (
        <>
            {/* Card 1 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <SiPostgresql size={32} />
                <p className="text-def-yellow font-semibold">PostgreSQL</p>
            </div>
            {/* Card 2 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <FaGit size={32} />
                <p className="text-def-yellow font-semibold">Git & Github</p>
            </div>
            {/* Card 3 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <VscVscode size={32} />
                <p className="text-def-yellow font-semibold">VS Code</p>
            </div>
            {/* Card 4 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <SiIntellijidea size={32} />
                <p className="text-def-yellow font-semibold">Intellijidea</p>
            </div>
            {/* Card 5 */}
            <div className="bg-dark-bg2 w-40 rounded-xl p-6 flex flex-col items-center gap-4
            shadow-md hover:shadow-xl hover:shadow-gray-600/20 border-2 hover:border-def-yellow 
            hover:scale-105 transition-all duration-300 text-white cursor-pointer
            shrink-0 snap-start">
                <PiPaperPlaneTiltLight size={32} />
                <p className="text-def-yellow font-semibold">Postman</p>
            </div>
        </>
    )
}