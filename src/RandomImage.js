import image1 from "./images/img1.png";
import image2 from "./images/img2.png";
import image3 from "./images/img3.png";
import image4 from "./images/img4.png";
import image5 from "./images/img5.png";

function RandomImage() {

    const ImagesList = [image1, image2, image3, image4, image5];

    const getRandomImg = Math.floor(Math.random() * ImagesList.length)
    
    return (
        <div className="container mt-3">
            <img className="TopImg" src={ImagesList[getRandomImg]} alt="LogoImage" />
        </div>
    )
}
export default RandomImage;