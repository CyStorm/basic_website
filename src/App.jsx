import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Hobbies from "./components/hobbies/hobbies";
import Contact from "./components/contact/contact";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="sections">
                <Intro/>
                <Projects/>
                <Hobbies/>
                <Contact/>
            </div>
        </div>
    );
}

export default App;
