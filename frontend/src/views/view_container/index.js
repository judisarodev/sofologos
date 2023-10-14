import React, { useContext } from "react";
import { HomeView } from "../home_view";
import { AboutUsView } from "../about_us_view";
import { PageContext } from "../../context/PageContext";
import { PostView } from '../post_view/index';

const ViewContainer = () => {

    const { page } = useContext(PageContext);

    return(
        <div>
            {page.HOME && <HomeView />}
            {page.ABOUT_US && <AboutUsView />}
            {page.POST && <PostView />}
        </div>
    );
}

export { ViewContainer }; 