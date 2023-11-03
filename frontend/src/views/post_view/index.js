import React, { useEffect, useState } from "react";

const PostView = ({postId}) => {

    const [post, setPost] = useState(
        {
            postId: 1,
            title: "",
            category: "",
            summary: "",
            content: "",
            likes: 0,
            views: 0,
            username: "",
            date: ""
        }
    );

    useEffect(() => {
        const url = 'http://localhost:9090/posts/get-by-id/' + postId;
        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application-json'
            }
        };
        fetch(url, request)
        .then((response) => {
            if(!response.ok){
                throw new Error ("No se pudo hacer contacto con el servidor");
            }else{
                return response.json();
            }
        })
        .then((data) => {
            setPost(data); 
        });

    }, [postId]);

    return(
        <div className="row justify-content-center m-3">
            <div className="col-6 content">
                
                <p>{post.date.day}/{post.date.month}/{post.date.year}</p>
                <p>{post.title}</p>
                <p>{post.summary}</p>
                <p>{post.content}</p>
            </div>
        </div>
    );
}

export { PostView }; 