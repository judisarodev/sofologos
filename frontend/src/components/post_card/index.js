import React, { useContext } from 'react';
import { BsEye } from 'react-icons/bs';
import './index.css';
import { LuPencil } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { PostsCategoriesContext } from '../../context/PostsCategoriesProvider';
import { useNavigate } from 'react-router-dom';



const PostCard = ({ info }) => {
    const { postId, title, date, summary, views } = info;
    const { setPostId } = useContext(PostsCategoriesContext);
    const navigate = useNavigate();
    
    let summaryText = summary; 
    if(summary.length > 300){
        summaryText = summaryText.slice(0, 200) + "...";   
    }
    
    let titleText = title; 
    if(titleText.length > 40){
        titleText = titleText.slice(0, 40) + "...";   
    }

    const getPostPage = () => {
        fetch(
            'http://localhost:9090/posts/add-view/' + postId,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .catch((err) => {
            console.log(err);
        });
        setPostId(info);
        navigate('/post-view');
    }

    return(
        <div className='card--container'>
            <div className='card__header d-flex justify-content-end'>
                    <p className='card__date m-0'>{date.date} / {date.month} / {date.year}</p>
                </div>
            <div className='card__content d-flex flex-column justify-content-around' onClick={getPostPage}>
                <p className='card__title m-0'>{titleText}</p>
                <p className='card__summary m-0'>{summaryText}</p>
            </div>  
            <div className='card_reactions d-flex justify-content-end'>
                    <p className='m-0'>
                        <BsEye /> {views}
                    </p>
                </div>
            <div className='card__divider'></div>
        </div>
    );
}

const deletePost = () => {

}

const AdminPostCard = ({ info }) => {
    const { title } = info;
    const { setPostId } = useContext(PostsCategoriesContext);
    const navigate = useNavigate();

    function setUpPost(){
        setPostId(info);   
        navigate('/edit-post'); 
    }

    return(
        <div className='card--container--admin d-flex align-items-center justify-content-between'>
            <div className='admin__icon admin__icon--edit'  onClick={setUpPost}>
                <LuPencil size={16} color='white'/>
            </div>
            <div className='d-flex flex-column justify-content-end p-3'>
                <p className='m-0 text-center'>{ title }</p>
            </div>
            <div className=' admin__icon admin__icon--delete'>
                <AiOutlineDelete  size={16} color='white' onClick={deletePost}/>      
            </div>
        </div>
    );
}

export { PostCard, AdminPostCard };