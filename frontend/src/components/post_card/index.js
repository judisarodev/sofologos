import React, { useContext, useState } from 'react';
import './index.css';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsEye } from 'react-icons/bs';
import { AiTwotoneHeart, AiOutlineHeart } from 'react-icons/ai';
import { PageContext } from '../../context/PageContext';


const PostCard = ({ info }) => {
    const { postId, title, date, summary, views, likes } = info;

    let summaryText = summary; 
    if(summary.length > 300){
        summaryText = summaryText.slice(0, 300) + "...";   
    }
    
    let titleText = title; 
    if(titleText.length > 40){
        titleText = titleText.slice(0, 40) + "...";   
    }

    const [heart, setHeart] = useState(false);

    const { setToPost } = useContext(PageContext);

    const onLike = () => {
        setHeart(!heart);
    }

    return(
        <div className='card--container'>
            <div className='card__header d-flex justify-content-between'>
                    <p className='card__date m-0'>{date.date} / {date.month} / {date.year}</p>
                    <RiShareForwardLine color='#757575' size={18}/>
                </div>
            <div className='card__content d-flex flex-column justify-content-around' onClick={() => setToPost(postId)}>
                <p className='card__title m-0'>{titleText}</p>
                <p className='card__summary m-0'>{summaryText}</p>
            </div>  
            <div className='card_reactions d-flex justify-content-between'>
                    <p className='m-0'><BsEye /> {views}</p>
                    <p className='m-0'>
                        {likes}
                        <span> </span>  
                        {heart && <AiTwotoneHeart onClick={onLike} color='#FF0000' />}
                        {!heart && <AiOutlineHeart onClick={onLike} color='#757575' />}
                    </p>
                </div>
            <div className='card__divider'></div>
        </div>
    );
}

export { PostCard };