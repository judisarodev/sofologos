import React, { useContext, useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { PageContext } from '../../context/PageContext';
import './index.css';


const PostCard = ({ info }) => {
    const { postId, title, date, summary, views } = info;

    let summaryText = summary; 
    if(summary.length > 300){
        summaryText = summaryText.slice(0, 200) + "...";   
    }
    
    let titleText = title; 
    if(titleText.length > 40){
        titleText = titleText.slice(0, 40) + "...";   
    }

    const { setToPost } = useContext(PageContext);

    return(
        <div className='card--container'>
            <div className='card__header d-flex justify-content-end'>
                    <p className='card__date m-0'>{date.date} / {date.month} / {date.year}</p>
                </div>
            <div className='card__content d-flex flex-column justify-content-around' onClick={() => setToPost(postId)}>
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

export { PostCard };