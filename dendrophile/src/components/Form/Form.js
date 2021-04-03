import React,{useState} from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import './Form.css'
const Form = () => {
    const [isSubmitted, setisSubmitted] = useState(false);
    function submitForm(){
        setisSubmitted(true);
    }
    return (
        <>
<div className="form-container">
    {/* <span className="close-btn">x</span> */}
    <div className="form-content-left"></div>
    {!isSubmitted?(<FormSignUp submitForm={submitForm} />) : <FormSuccess />}
</div>
        </>
    )
}

export default Form;
