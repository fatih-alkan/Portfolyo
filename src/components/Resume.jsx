export default function Resume() {
    return (
        <div className="min-h-screen bg-soft-bg text-gray-300 py-12 px-8">

            {/* DESKTOP HEADERS */}
            <div className="hidden md:flex justify-around mb-16">
                <h2 className="text-def-yellow text-4xl font-bold tracking-wider">Experiences</h2>
                <h2 className="text-def-yellow text-4xl font-bold tracking-wider">Educations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT — EXPERIENCES */}
                <div className="relative md:pl-10 pl-6">

                    {/* MOBILE HEADER */}
                    <h2 className="md:hidden text-def-yellow text-3xl font-bold mb-8">
                        Experiences
                    </h2>

                    {/* Vertical Line */}
                    <div className="absolute md:left-3 left-2 top-8 w-0.5 h-full bg-gray-400"></div>

                    {/* Item */}
                    <div className="relative mb-16">

                        <div className="absolute md:-left-[52px] -left-[38px] top-0 bg-[#4c4f63] text-white h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full font-bold text-sm md:text-base">
                            2022
                        </div>

                        <h3 className="text-2xl font-bold text-gray-200 mt-2 ml-2">
                            Anel Group <span className="text-sm text-gray-400">— Intern</span>
                        </h3>

                        <p className="text-gray-400 ml-2">08/2022 – 09/2022</p>

                        <ul className="list-disc ml-6 mt-3 space-y-2">
                            <li>During my internship, I worked on the installation, maintenance, and troubleshooting of computer hardware systems. I assisted the technical team with testing and replacing components to ensure optimal system performance.</li>
                            <li>I also supported daily technical operations, including setting up new devices, preparing systems for users, and documenting issues encountered. This experience helped me gain a solid understanding of hardware infrastructure and technical support processes.</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT — EDUCATION */}
                <div className="relative md:pl-10 pl-6">

                    {/* MOBILE HEADER */}
                    <h2 className="md:hidden text-def-yellow text-3xl font-bold mb-8">
                        Educations
                    </h2>

                    {/* Vertical Line */}
                    <div className="absolute md:left-3 left-2 top-0 w-0.5 h-full bg-gray-400"></div>

                    {/* University */}
                    <div className="relative mb-16">

                        <div className="absolute md:-left-[50px] -left-[38px] top-0 bg-[#4c4f63] text-white h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full font-bold text-sm md:text-base">
                            2018
                        </div>

                        <h3 className="text-2xl font-bold text-gray-200 ml-2">
                            Bulent Ecevit University
                            <span className="text-sm text-gray-400 ml-2">Bachelor's Degree</span>
                        </h3>

                        <p className="text-gray-400 ml-2">Computer Engineering</p>
                        <ul className="list-disc ml-6 mt-3">
                            <li>2018–2024</li>
                        </ul>
                    </div>

                    {/* HighSchool */}
                    <div className="relative mb-16">

                        <div className="absolute md:-left-[50px] -left-[38px] top-0 bg-[#4c4f63] text-white h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full font-bold text-sm md:text-base">
                            2014
                        </div>

                        <h3 className="text-2xl font-bold text-gray-200 ml-2">
                            50.Yıl Tahran HighSchool
                        </h3>
                        <ul className="list-disc ml-6 mt-3">
                            <li>2014–2018</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
