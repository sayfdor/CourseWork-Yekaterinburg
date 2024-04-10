import './GridMenu.css'
import GridElem from "./GridElem.js";


function GridMenu() {
    return (
        <div className="GridMenu-container">
            <div className="GridMenu-grid">
                <GridElem title="история" imgsrc="history"/>
                <GridElem title="места" imgsrc="places"/>
                <GridElem title="инциденты" imgsrc="incidents"/>
                <GridElem title="районы" imgsrc="districts"/>
            </div>
        </div>
    );
}

export default GridMenu;
