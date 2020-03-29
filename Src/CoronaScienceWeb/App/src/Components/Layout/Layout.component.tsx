import React from "react";
import {NoSsr, CssBaseline} from "@material-ui/core";
import {StyledLayoutBox, StyledHelloWorldTypography} from "./Layout.styles";
import {HeaderComponent} from "../Header/Header.component";
import HeatMap from "~Components/HeatMap";

export const LayoutComponent: React.FunctionComponent = () => {
    return (
        <NoSsr>
            <CssBaseline/>
            <StyledLayoutBox>
                <HeaderComponent/>
                    <HeatMap/>
            </StyledLayoutBox>
        </NoSsr>
    );
};
