import './index.css'; 

const Form = ({ children, title }) => {

    return(
        <div className="d-flex justify-content-center">
            <div className="form-group form-container">
                <p className="sing-up-form__title">{ title }</p>
                <form className="d-flex flex-column">
                    { children }
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

const SubmitButton = ({ action, text }) => 

    <button 
        className="btn btn-primary button--sumbit" 
        onClick={ action }>
        { text }
    </button>;

    export { Form, Input, SubmitButton }; 