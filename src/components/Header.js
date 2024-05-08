import './Header.css'

import {Link} from 'react-router-dom'

function Header(props) {

    let ye_path = ''
    if (props.path !== undefined) {
        ye_path = 'Yekaterinburg:';
    } else {
        ye_path = 'Yekaterinburg';
    }

    return (
        <header className="Header">
            <div className="Header-logo">
                <Link to={'/'}> <span className='P1'>CourseWork:</span><span className='P2'> {ye_path} </span><span
                    className='P3'> {props.path}</span>
                </Link>

            </div>
            <div className="Header-about">
                <Link to={'/about'}>about</Link>
            </div>
        </header>
    );
}

export default Header;
