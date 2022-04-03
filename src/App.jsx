import Navbar from "./components/navbar/navbar";
import PageContainer from "./components/page_container/pageContainer";
import "./App.scss"

function App() {
    return (
        <div className="App">
            <Navbar/>
            <PageContainer bgc="blue">
                <h1>adssdsdasdasd</h1>
            </PageContainer>
            <PageContainer bgc="yellow"></PageContainer>
            <PageContainer></PageContainer>
            <PageContainer bgc="blue"></PageContainer>
            <PageContainer bgc="yellow"></PageContainer>
        </div>
    );
}

export default App;
