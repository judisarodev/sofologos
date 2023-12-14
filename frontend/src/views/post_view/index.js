import React, { useContext, useEffect, useState } from "react";
import { ViewContainer } from "../../components/view_container";
import { PostsCategoriesContext } from "../../context/PostsCategoriesProvider";

const PostView = () => {

    const { postId } = useContext(PostsCategoriesContext); 

    
    useEffect(() => {
        const url = 'http://localhost:9090/posts/get-by-id/' + postId.postId;
        const request = {
            method: 'GET',
            credentials: 'include',  
            headers: {
                'Content-Type': 'application-json',
            }
        };
        fetch(url, request)
        .then((response) => {
            if(!response.ok){
                throw new Error ("No se pudo hacer contacto con el servidor " + response);
            }else{
                return response.json();
            }
        })
        .then((data) => {
            setPost(data); 
        })
        .catch((error) => {
            console.log("error es:: " + error);
        });

    }, [postId]);
    
    const [post, setPost] = useState(
        {
            postId: '',
            title: '',
            category: '',
            summary: '',
            content: '',
            likes: '',
            views: '',
            username: '',
            date: ''
        }
    );
    return(
        <ViewContainer>
            <div className="row justify-content-center m-3">
                <div className="col-6 content">
                    
                    <p>{post.date.date}/{post.date.month}/{post.date.year}</p>
                    <p>{post.title}</p>
                    <p>{post.summary}</p>
                    <p>{post.content}</p>
                </div>
            </div>
        </ViewContainer>
    );
}

export { PostView }; 