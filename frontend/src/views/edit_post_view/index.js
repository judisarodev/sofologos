import React, { useContext, useEffect, useState } from "react";
import { UnauthorizeBanner } from "../../components/unauthorize_banner";
import { PostsCategoriesContext } from "../../context/PostsCategoriesProvider";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/JwtProvider";
import { Categories } from "../../components/categories";

const EditPostView = () => {
    const { focusedPost } = useContext(PostsCategoriesContext);
    const { 
        title, 
        category, 
        content, 
        summary, 
        postId, 
        username, 
        views, 
        date = {
            date: (new Date()).getDate(),
            month: (new Date()).getMonth() + 1,
            year: (new Date()).getFullYear(),
        } } = focusedPost; 
        
    const [currentCategory, setCurrentCategory] = useState(category);
    const navigate = useNavigate();
    const { jwt } = useContext(JwtContext); 
    const [formData, setFormData] = useState(
        {
            postId: postId,
            category: category,
            content: content,
            date: date,
            summary: summary,
            title: title,
            username: username,
            views: views
      }
    );

    useEffect(() => {
        
    }, []);

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
        formData.category = currentCategory; 
        const data = JSON.stringify(formData); 
        fetch('http://localhost:9090/posts/save', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt    
            },
            body: data
        })
        .then(() => {
            navigate('/admin')
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

                <Categories forceDropDown={true} setCategory={setCurrentCategory} showSearchBar={false} defaultCategory={category}/>

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