import React from "react";
import LottieView from "lottie-react-native";

function Loading() {
    return (
        <LottieView
            source={require("../../../assets/pokeball-loading.json")}
            style={{ width: "50%", height: "50%" }}
            autoPlay
            loop
        />
    )
}

export default Loading;