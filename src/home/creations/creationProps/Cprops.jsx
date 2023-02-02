import React from "react";

//Style//
import { Content } from "./Cpropstyle";

//images//
import DeepEarth from "../../../images/desktop/image-deep-earth.jpg";
import Night from "../../../images/desktop/image-night-arcade.jpg";
import Soccer from "../../../images/desktop/image-soccer-team.jpg";
import Grid from "../../../images/desktop/image-grid.jpg";
import Above from "../../../images/desktop/image-from-above.jpg";
import Boreal from "../../../images/desktop/image-pocket-borealis.jpg";
import Curiosity from "../../../images/desktop/image-curiosity.jpg";
import FishEye from "../../../images/desktop/image-fisheye.jpg";

export const CProps = (props) => {
    return(
        <>
            <Content image={DeepEarth} style={{backgroundPosition: "center", backgroundPositionY: "-17rem"}}>
                <p>Deep Earth</p>
            </Content>
            <Content image={Night} style={{backgroundPosition: "center"}}>
                <p>Nigth arcade</p>
            </Content>
            <Content image={Soccer} style={{backgroundPosition: "initial"}}>
                <p>Soccer team vr</p>
            </Content>
            <Content image={Grid}>
                <p>The grid</p>
            </Content>
            <Content image={Above}>
                <p>From up above vr</p>
            </Content>
            <Content image={Boreal}>
                <p>Pocket borealis</p>
            </Content>
            <Content image={Curiosity} style={{backgroundPosition: "initial"}}>
                <p>the curiosity</p>
            </Content>
            <Content image={FishEye} style={{backgroundPosition: "bottom", backgroundPositionY: "-20rem"}}>
                <p>Make it fisheye</p>
            </Content>
        </>
    )
}