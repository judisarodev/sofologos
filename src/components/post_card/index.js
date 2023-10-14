import React, { useState } from 'react';
import './index.css';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsEye } from 'react-icons/bs';
import { AiTwotoneHeart, AiOutlineHeart } from 'react-icons/ai';

const PostCard = ({ info }) => {
    const { title, date, summary, views, likes } = info; 
    const [heart, setHeart] = useState(false);

    const onLike = () => {
        setHeart(!heart);
    }

    return(
        <div className='card--container d-flex flex-column gap-2'>
            <div className='d-flex justify-content-between'>
                <p className='card__date'>{date}</p>
                <RiShareForwardLine color='#757575'/>
            </div>
            <p className='card__title'>{title}</p>
            <p className='card__summary'>{summary}</p>
            <div className='d-flex justify-content-between'>
                <p><BsEye /> {views}</p>
                <p>
                    {likes}
                    <span> </span>
                    {heart && <AiTwotoneHeart onClick={onLike} color='#FF0000' />}
                    {!heart && <AiOutlineHeart onClick={onLike} color='#757575' />}
                </p>
            </div>
        </div>
    );
}

export { PostCard };