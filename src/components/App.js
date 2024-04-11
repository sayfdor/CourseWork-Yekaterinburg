import './App.css';
import MainPage from "./MainPage";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Places from "./Places";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/places" exact element={<Places/>}/>
                <Route path="/" exact element={<MainPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
