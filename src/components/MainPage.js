import './MainPage.css';
import Header from "./Header";
import Intro from "./Intro";
import GridMenu from "./GridMenu";
import Footer from "./Footer";

function MainPage() {

    let data = [['история', 'history'], ['места', 'places'], ['инциденты', 'incidents'], ['районы', 'districts']]

    return (
        <div>
            <Header/>
            <Intro title={'Екатеринбург:\nсердце Урала'} imgSrc={'mainPage'}/>
            <GridMenu data={data}/>
            <Footer/>
        </div>
    );
}

export default MainPage;
