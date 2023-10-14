import React, { useContext } from "react";
import { HomeView } from "../home_view";
import { AboutUsView } from "../about_us_view";
import { PageContext } from "../../context/PageContext";

const ViewContainer = () => {

    const { page } = useContext(PageContext);

    return(
        <div>
            {page.HOME && <HomeView />}
            {page.ABOUT_US && <AboutUsView />}
        </div>
    );
}

export { ViewContainer }; 