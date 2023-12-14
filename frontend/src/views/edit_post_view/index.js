import React, { useContext, useState } from "react";
import { UnauthorizeBanner } from "../../components/unauthorize_banner";
import { PostsCategoriesContext } from "../../context/PostsCategoriesProvider";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/JwtProvider";

const EditPostView = () => {
    const { postId, setAllPosts, setCategories } = useContext(PostsCategoriesContext);
    const navigate = useNavigate();
    const { jwt } = useContext(JwtContext); 
    const [formData, setFormData] = useState(
        Object.entries(postId).length !== 0 ? {
        category: postId.category,
        content: postId.content,
        date: {
            date: postId.date.date,
            month: postId.date.month,
            year: postId.date.year,
        },
        postId: postId.postId,
        summary: postId.summary,
        title: postId.title,
        username: postId.username,
        views: postId.views
      }
      : {
        category: '',
        content: '',
        date: {
            date: (new Date()).getDate(),
            month: (new Date()).getMonth() + 1,
            year: (new Date()).getFullYear(),
        },
        summary: '',
        title: '',
        username: '0',
        views: '0'
      }
      );
    function goToAdminView(){
        navigate('/admin');
    }
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value.toString(),
        });
    }

    const submit = () => {
        console.log(formData);
        fetch('http://localhost:9090/posts/save', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            },
            body: JSON.stringify(formData)
        })
        .then((response) => {
            navigate('/admin')
            console.log(response); 
            if(response){
                setAllPosts(null);
                setCategories(null); 
            }
        })
        .catch((error) => {
            console.log(error); 
        });
    }

    return(
        <>
        <UnauthorizeBanner />
        <div className="d-flex justify-content-center">
            <from className="form-group" style={{width: '800px', margin: '10px'}}>
                <button className="d-flex gap-2 align-items-center border-0 p-2" onClick={goToAdminView}>
                    <IoMdArrowBack />
                    <p className="m-0">Regresar</p>
                </button>

                <label className="sing-up-form__label">{ 'Categoría' }</label>
                <input name="category" type={'text'} className="form-control" placeholder={'Categoría'} value={formData.category} onChange={handleChange}/>

                <label className="sing-up-form__label">{ 'Título' }</label>
                <input name="title" type={'text'} className="form-control" placeholder={'Título'} value={formData.title} onChange={handleChange}/>

                <label className="sing-up-form__label">{ 'Resumen' }</label>
                <textarea name="summary" type={'text'} className="form-control" placeholder={'Resumen'} value={formData.summary} rows={10} onChange={handleChange}/>

                <label className="sing-up-form__label">{ 'Contenido' }</label>
                <textarea name="content" className="form-control" placeholder={'Contenido'} value={formData.content} rows={20} onChange={handleChange}/>

                <button 
                    className="btn btn-primary button--sumbit" onClick={submit}> { 'EVIAR' }
                </button>
            </from>
        </div>
        </>
        
    );
}

export { EditPostView }; 