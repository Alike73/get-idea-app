

function Button({trigger, mouseOverBtn}) {
    return (
        <div className="BtnContainer">
            <button className="link anim-explode-container" onClick={trigger} onMouseOver = {mouseOverBtn}>
                <p className="BtnText mt-3">Get Idea!</p>
                <svg className="anim-explode img-fluid" role="presentational" viewBox="0 0 500 500"></svg>
            </button>
        </div>
    )
}
export default Button;