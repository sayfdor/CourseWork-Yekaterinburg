import './Places.css'
import Header from "./Header.js"
import Footer from "./Footer";
import SmallIntro from "./SmallIntro";
import PlacesSection from "./PlacesSection";

function Places() {
    return (
        <div>
            <Header path='Places'/>
            <SmallIntro title={'Достопримечательности'} imgSrc={'placesPage'}/>
            <PlacesSection title='1 section' text='1 text'/>
            <PlacesSection title='2 section' text='2 text'/>
            <Footer/>
        </div>
    );
}

export default Places;
