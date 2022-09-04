import Navbar from "./components/navbar/navbar";
import PageContainer from "./components/page_container/pageContainer";
import "./App.scss"

function App() {
    return (
        <div className="App">
            <Navbar/>
            <PageContainer id="landing" bgc="blue">
                <h1>adssdsdasdasd</h1>
            </PageContainer>
            <PageContainer id="intro" bgc="yellow"></PageContainer>
            <PageContainer id="projects" ></PageContainer>
            <PageContainer id="experience" bgc="blue"></PageContainer>
            <PageContainer id="contact" bgc="yellow"></PageContainer>
        </div>
    );
}

export default App;
