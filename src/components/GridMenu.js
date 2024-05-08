import './GridMenu.css'
import GridElem from "./GridElem.js";


function GridMenu(props) {
    return (
        <div className="GridMenu-container">
            <div className="GridMenu-grid">
                { props.data.map(x => <GridElem title={x[0]} arg={x[1]}/>) }
            </div>
        </div>
    );
}

export default GridMenu;
