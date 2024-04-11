import './Intro.css'

import mainPageIntroImg from '../img/title-bg.png'
import placesPageIntroImg from '../img/places_title.png'

function Intro(props) {

    let imgDict = {
        'mainPage': mainPageIntroImg,
        'placesPage': placesPageIntroImg,
    }

    // let introHeightDict = {
    //     'bigIntro': {
    //         height: '100vh'
    //     },
    //     'smallIntro': {
    //         height: '40vh',
    //         minHeight: '150px'
    //     }
    // }

    return (
        // style={introHeightDict[props.introType]}
        <div className="Intro-container">
            <img className="Intro-img" src={imgDict[props.imgSrc]} alt='oops'/>
            <div className="Intro-title">
                {props.title}
            </div>
        </div>
    );
}

export default Intro;