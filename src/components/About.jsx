export default function About() {
    return (
        <>
            <div className="h-screen bg-soft-bg min-[1260px]:px-100 min-[1260px]:py-20 lg:px-20 md:py-20 md:px-20 sm:py-30 sm:px-10 py-10 px-10 max-[640px]:h-full">
                <div className="bg-dark-bg text-white text-center flex flex-col items-center justify-center rounded-4xl gap-8 py-12 px-16 hover:border-def-yellow border-2 shadow-sm hover:shadow-lg hover:shadow-text-gray hover:scale-105 transition-all duration-500">
                    <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
                    <div className="flex flex-col gap-4 text-[12px] md:text-[16px]">
                        <p>Hi, I’m Fatih Alkan. I graduated from Bülent Ecevit University with a degree in Computer Engineering, and I’m currently focusing on backend development with Java and Spring Boot. On the frontend, I have experience building modern interfaces using React, JavaScript, HTML, and CSS.</p>
                        <p>I was selected among more than 2,400 applicants for the Workintech Fullstack Development Program, which I successfully completed. During this intensive training, I worked on real-world projects, gained hands-on experience, and improved my understanding of software architecture, REST APIs, and SQL.</p>
                        <p>I’m a motivated developer with a strong desire to learn, solve problems, and contribute to impactful projects. My goal is to build clean, efficient, and scalable applications while adding value to the team I work with.</p>
                    </div>
                </div>
            </div>
        </>
    )
}