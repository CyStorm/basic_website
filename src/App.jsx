import Topbar from "./components/topbar/topbar";
import PageContainer from "./components/page_container/pageContainer";
import ProjectCard from "./components/project_card/projectCard";
import "./App.scss"

function App() {
    return (
        <div className="App">
            <Topbar></Topbar>
            <PageContainer id="landing" bgc="bgc1">
                <h1>adssdsdasdasd</h1>
            </PageContainer>
            <PageContainer id="intro" bgc="bgc2">
                <ProjectCard></ProjectCard>
            </PageContainer>
            <PageContainer id="projects" bgc="bgc1"></PageContainer>
            <PageContainer id="experience" bgc="bgc2"></PageContainer>
            <PageContainer id="contact" bgc="bgc1"></PageContainer>
        </div>
    );
}

export default App;
