import './Intro.css'

import mainPageIntroImg from '../img/main_intro.png'

function Intro(props) {

    let imgDict = {
        'mainPage': mainPageIntroImg
    }

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