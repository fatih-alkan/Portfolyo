import Languages from "./Languages";
import Framework from "./Framework";
import Tools from "./Tools";
export default function Skills() {
    return (
        <>
            <div className="h-full bg-dark-bg px-6">
                <div className="w-full px-6 py-10">
                    <h2 className="text-white text-2xl font-bold mb-6">Languages</h2>

                    <div className="relative overflow-x-auto no-scrollbar whitespace-nowrap py-4">

                        <div className="flex gap-6 animate-infinite-scroll">
                            <Languages />
                            <Languages />
                        </div>

                    </div>

                </div>

                <div className="w-full px-6 py-10">
                    <h2 className="text-white text-2xl font-bold mb-6">Frameworks & Libraries</h2>

                    <div className="relative overflow-x-auto no-scrollbar whitespace-nowrap py-4">

                        <div className="flex gap-6 animate-infinite-scroll">

                            <Framework />
                            <Framework />
                        </div>
                    </div>
                </div>

                <div className="w-full px-6 py-10">
                    <h2 className="text-white text-2xl font-bold mb-6">Tools & Platforms</h2>
                    <div className="relative overflow-x-auto no-scrollbar whitespace-nowrap py-4">

                        <div className="flex gap-6 animate-infinite-scroll">
                            <Tools />
                            <Tools />
                        </div>
                    </div>
                    </div>
                </div>
            </>
            )
}