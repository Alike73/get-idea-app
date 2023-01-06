import sideImg from "./images/hero.svg";
function SideImg() {
    return (
        <div className="SideImageBox">
            <img className="SideImg" src={sideImg} alt="SideImage" />
        </div>
    )
}
export default SideImg;