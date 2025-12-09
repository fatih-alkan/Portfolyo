import About from "../components/About";
import HomeBanner from "../components/HomeBanner";
import Project from "../components/Project";
import ProjectBanner from "../components/ProjectBanner";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function HomePage(){
    return(
        <>
        <Header/>
        <div id="home">
            <HomeBanner/>
        </div>

        <div id="about">
            <About/>
        </div>
        <div id="resume">
            <Resume/>
        </div>
        <div id="skills">
            <Skills/>
        </div>
        <div id="projects">
            <ProjectBanner/>
        </div>
        <Project/>
        <Footer/>
        </>
    )
}