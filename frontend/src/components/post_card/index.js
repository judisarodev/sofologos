import React, { useContext, useState } from 'react';
import './index.css';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsEye } from 'react-icons/bs';
import { AiTwotoneHeart, AiOutlineHeart } from 'react-icons/ai';
import { PageContext } from '../../context/PageContext';


const PostCard = ({ info }) => {
    const { postId, title, day, month, year, summary, views, likes } = info; 
    const [heart, setHeart] = useState(false);

    const { setToPost } = useContext(PageContext);

    const onLike = () => {
        setHeart(!heart);
    }

    return(
        <div onClick={() => setToPost(postId) } className='card--container d-flex flex-column gap-1'>
            <div className='d-flex justify-content-between'>
                <p className='card__date m-0'>{day}/{month}/{year}</p>
                <RiShareForwardLine color='#757575' size={15}/>
            </div>
            <p className='card__title m-0'>{title}</p>
            <p className='card__summary m-0'>{summary}</p>
            <div className='d-flex justify-content-between'>
                <p className='m-0'><BsEye /> {views}</p>
                <p className='m-0'>
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