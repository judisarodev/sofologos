import { ViewContainer } from "../../components/view_container";
import { PostsGallery } from "../../components/posts_gallery";
import { UnauthorizeBanner } from "../../components/unauthorize_banner";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { PostsCategoriesContext } from "../../context/PostsCategoriesProvider";
import { useNavigate } from "react-router-dom";

const AdminView = () => {

    const { setFocusedPost } = useContext(PostsCategoriesContext);
    const navigate = useNavigate(); 

    function createPost(){ 
        setFocusedPost({});
        navigate('/edit-post');
    }
    return(
        <ViewContainer>
            <UnauthorizeBanner />
            <PostsGallery adminPost={true}/>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 p-5">
                        <button className="btn btn-primary" style={{width: '100%'}} onClick={createPost}><FaPlus size={20}/></button>
                        <p className="text-center" style={{ fontStyle: 'italic' }}>Añade un nuevo post a tu lista</p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </ViewContainer>
    );
}

export { AdminView }; 