import './GridElem.css'
import history_title from '../img/history_title.png'
import places_title from '../img/attractions_title.png'
import incidents_title from '../img/incidents_title.png'
import districts_title from '../img/districts_title.png'
import incidents_anthrax_title from '../img/incidents_sibir_title.png'
import incidents_family_title from '../img/incidents_family_title.png'
import incidents_sort_title from '../img/incidents_sort_title.png'
import incidents_anthrax_title_overlay from '../img/incidents_sibir_title_overlay.png'
import incidents_family_title_overlay from '../img/incidents_family_title_overlay.png'
import incidents_sort_title_overlay from '../img/incidents_sort_title_overlay.png'



import {Link, useLocation} from 'react-router-dom'

let dict = {
    'history' : history_title,
    'places' : places_title,
    'incidents' : incidents_title,
    'districts' : districts_title,

    'anthrax' : incidents_anthrax_title,
    'anthrax_overlay' : incidents_anthrax_title_overlay,

    'family' : incidents_family_title,
    'family_overlay' : incidents_family_title_overlay,

    'sort' : incidents_sort_title,
    'sort_overlay' : incidents_sort_title_overlay,
}

function GridElem(props) {
    let link = `${props.arg}`;
    return (
        <Link className="GridElem-container" to={link}>
            <div className="GridElem-title">
                {props.title}
            </div>
            <img className="GridElem-picture"
                 src={dict[props.arg]}
                 alt="Error"/>
            <img className="GridElem-picture-overlay"
                 src={dict[props.arg + '_overlay']}
                 alt=""/>
        </Link>
    );
}

export default GridElem;
