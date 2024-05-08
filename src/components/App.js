import './App.css';
import MainPage from "./MainPage";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Places from "./Places";
import Incidents from "./Incidents";
import Anthrax from "./Anthrax";
import About from "./About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/places" exact element={<Places/>}/>
                <Route path="/incidents" exact element={<Incidents/>}/>
                <Route path="/incidents/anthrax" exact element={<Anthrax/>}/>
                <Route path="/about" exact element={<About/>}/>
                <Route path="/" exact element={<MainPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
