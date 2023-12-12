import React from "react";
import { ViewContainer } from "../../components/view_container";
import './index.css';
import { SingUpForm } from "../../components/sing-up-form";
import { PostsGallery } from "../../components/posts_gallery";


const HomeView = () => {

    return(
        <ViewContainer>
            <PostsGallery/>
            <SingUpForm /> 
        </ViewContainer>
    );
}

export { HomeView }; 