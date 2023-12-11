import './index.css'; 

const Form = ({ action, children, textButton, title }) => {

    return(
        <div className="d-flex justify-content-center">
            <div className="form-group form-container">
                <p className="sing-up-form__title">{ title }</p>
                <form className="d-flex flex-column">
                    { children }
                    <button className="btn btn-primary button--sumbit" onClick={ action }><p className="m-0 button--sumbit__text">{ textButton }</p></button>
                </form>
            </div>
        </div>
    );
}

const Input = ({ label, type, placeholder, setInfo }) => {

    const catchInfo = (e) => {
        setInfo(e.target.value); 
    }

    return(
        <>
        <label className="sing-up-form__label">{ label }</label>
        <input type={type} className="form-control" placeholder={placeholder} onChange={catchInfo}/>
        </>
        
    );
}

export { Form, Input }; 