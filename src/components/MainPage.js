import './MainPage.css';
import Header from "./Header.js";
import Intro from "./Intro.js"
import GridMenu from "./GridMenu.js"
import Footer from "./Footer";

function MainPage() {
    return (
        <div>
            <Header/>
            <Intro title={'Екатеринбург:\nсердце Урала'} imgSrc={'mainPage'}/>
            <GridMenu/>
            <Footer/>
        </div>
    );
}

export default MainPage;
