import React from "react";
import { HomeView } from "../home_view";
import { AboutUsView } from "../about_us_view";

const ViewContainer = ({ page }) => {
    return(
        <div>
            {page.HOME && <HomeView />}
            {page.ABOUT_US && <AboutUsView />}
        </div>
    );
}

export { ViewContainer }; 