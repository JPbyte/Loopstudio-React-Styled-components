import React from "react";
import { CProps } from "./creationProps/Cprops";
import { GridNow, Section, Tbutton } from "./style";


const Creation = () => {
    return(
        <Section>
            <Tbutton>
                <h3>our creations</h3>
                    <button>see all</button>
            </Tbutton>
            <GridNow>
                <CProps />
            </GridNow>
        </Section>
    )
}

export default Creation