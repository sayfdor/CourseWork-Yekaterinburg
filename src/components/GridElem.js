import './GridElem.css'
import history_title from '../img/history_title.png'
import places_title from '../img/attractions_title.png'
import incidents_title from '../img/incidents_title.png'
import districts_title from '../img/districts_title.png'

import {Link} from 'react-router-dom'

let dict = {
    'history' : history_title,
    'places' : places_title,
    'incidents' : incidents_title,
    'districts' : districts_title
}

function GridElem(props) {
    let link = `/${props.arg}`;
    return (
        <Link className="GridElem-container" to={link}>
            <div className="GridElem-title">
                {props.title}
            </div>
            <img className="GridElem-picture"
                 src={dict[props.arg]}
                 alt="Error"/>
        </Link>
    );
}

export default GridElem;
