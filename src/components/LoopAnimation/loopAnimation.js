import React from "react";
import Lottie from "lottie-react";
import loopAnimation from "../../config/loop.json";

const LoopAnimationIcon = () => {
    return <Lottie animationData={loopAnimation} loop={true}/>
};

export default LoopAnimationIcon;
