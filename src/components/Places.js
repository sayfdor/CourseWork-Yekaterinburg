import './Places.css'
import Header from "./Header.js"
import Footer from "./Footer";
import Intro from "./Intro";

function Places() {
    return (
        <div>
            <Header path='Places'/>
            <Intro title={'Достопримечательности'} imgSrc={'placesPage'}/>
            <Footer/>
        </div>
    );
}

export default Places;
