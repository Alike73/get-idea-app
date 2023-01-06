import gsap from "gsap";

function WhatToDoApp({myActivity}) {
    const textIdea = document.querySelector(".Text");
    gsap.config({
        autoSleep: 60,
        force3D: false,
        nullTargetWarn: false,
        trialWarn: false,
        units: {left: "%", top: "%", rotation: "rad"}
    });
    gsap.fromTo(textIdea, {opacity: 0, y: 100}, {duration: .8, opacity: 1, y: 0})

    return (
        <div className="container TextContainer">
            <h2 className="Text text-center">&#171;{myActivity}&#187;</h2>
        </div>
    )
}
export default WhatToDoApp;