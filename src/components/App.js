import './App.css';
import Header from "./Header.js";
import Intro from "./Intro.js"
import GridMenu from "./GridMenu.js"
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <GridMenu/>
        <Footer/>
    </div>
  );
}

export default App;
