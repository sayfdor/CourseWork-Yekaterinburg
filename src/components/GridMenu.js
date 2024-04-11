import './GridMenu.css'
import GridElem from "./GridElem.js";


function GridMenu() {
    return (
        <div className="GridMenu-container">
            <div className="GridMenu-grid">
                <GridElem title="история" arg="history"/>
                <GridElem title="места" arg="places"/>
                <GridElem title="инциденты" arg="incidents"/>
                <GridElem title="районы" arg="districts"/>
            </div>
        </div>
    );
}

export default GridMenu;
