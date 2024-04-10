import './GridElem.css'
import history_title from '../img/history_title.png'
import places_title from '../img/attractions_title.png'
import incidents_title from '../img/incidents_title.png'
import districts_title from '../img/districts_title.png'

let dict = {
    'history' : history_title,
    'places' : places_title,
    'incidents' : incidents_title,
    'districts' : districts_title
}

function GridElem(props) {
    return (
        <a className="GridElem-container" href="#">
            <div className="GridElem-title">
                {props.title}
            </div>
            <img className="GridElem-picture"
                 src={dict[props.imgsrc]}
                 alt="Error"/>
        </a>
    );
}

export default GridElem;
