import React, { useContext } from "react";
import { ViewContainer } from "../../components/view_container";
import { JwtContext } from "../../context/JwtProvider";
import { PostsGallery } from "../../components/posts_gallery";


const AdminView = () => {
    const { jwt } = useContext(JwtContext); 

    return(
        <ViewContainer>
            <PostsGallery adminPost={true}/>
        </ViewContainer>
    );
}

export { AdminView }; 