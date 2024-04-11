import './Header.css'

import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <header className="Header">
            <div className="Header-logo">
                <Link to={'/'}> <span className='P1'>CourseWork</span><span className='P2'>: Yekaterinburg</span><span className='P3'>: {props.path}</span>
                </Link>
            </div>
            <div className="Header-about">
                <a href="#"> about </a>
            </div>
        </header>
    );
}

export default Header;
