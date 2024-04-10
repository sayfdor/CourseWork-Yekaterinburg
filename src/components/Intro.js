import './Intro.css'

function Intro() {
    let title_text = 'Екатеринбург:\nсердце Урала'
    return (
        <div className="Intro-container">
            <div className="Intro-title">
                {title_text}
            </div>
        </div>
    );
}

export default Intro;