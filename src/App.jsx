import Topbar from "./components/topbar/topbar";
import PageContainer from "./components/page_container/pageContainer";
import "./App.scss"
// import ProjectCard from "./components/project_card/projectCard";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import ProjectPageContainer from "./pages/projectPageContainer";
import IntroPageContainer from "./pages/introPageContainer";
import LandingPageContainer from "./pages/landingPageContainer";
import ExperiencePageContainer from "./pages/experiencePageContainer";
import CustomNavbar from "./components/custom_navbar/customNavbar";


function App() {
    return (
        <div className="App">
            {/* <Topbar></Topbar> */}
            {/* <CustomNavbar></CustomNavbar> */}
            {/* <PageContainer id="landing" bgc="bgc1"> */}
            <div>

                <LandingPageContainer></LandingPageContainer>
            </div>
            {/* </PageContainer> */}

            {/* <PageContainer id="intro" bgc="bgc2"> */}
                <IntroPageContainer></IntroPageContainer>
            {/* </PageContainer> */}

            {/* <PageContainer id="projects" bgc="bgc1"> */}
                <ProjectPageContainer></ProjectPageContainer>
            {/* </PageContainer> */}

            {/* <PageContainer id="experience" bgc="bgc2"> */}
                <ExperiencePageContainer></ExperiencePageContainer>
            {/* </PageContainer>
            <PageContainer id="contact" bgc="bgc1">

            </PageContainer> */}
        </div>
    );
}

export default App;
