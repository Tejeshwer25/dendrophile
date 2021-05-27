import React from 'react';
import useForm from "./useForm";
import { Button } from "../Navbar/Button";
import validate from './validateInfo';
import './Form.css';
const FormSignUp=({ submitForm })=>{
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);

    return (
     <div className="form-content-right">
         {/* <form className="form" onSubmit={handleSubmit}> */}
         <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>Get Started! Create your Account!</h1> 

            <div className="form-inputs">
                <label htmlFor="companyname" className="form-label">
                
                </label>
                <input 
                    type="text" 
                    name ="companyname"
                    className="form-input"
                        placeholder="Company Name"
                        value={values.companyname}
                        onChange={handleChange}
                    />
                    {errors.companyname &&<p>{errors.companyname}</p>}
            </div>
           
            <div className="form-inputs">
                <label htmlFor="name" className="form-label">
                  
                </label>
                <input 
                    type="text" 
                    name ="name"
                    className="form-input"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name &&<p>{errors.name}</p>}
            </div>
          
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">
                   
                </label>
                <input 
                    type="email" 
                    name ="email"
                    className="form-input"
                        placeholder="Email ID"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email &&<p>{errors.email}</p>}
            </div>
            
            <div className="form-inputs">
                <label htmlFor="contact" className="form-label">
                
                </label>
                <input 
                    type="tel" 
                    name ="contact"
                    className="form-input"
                        placeholder="Contact Number"
                        value={values.contact}
                        onChange={handleChange}
                    />
                    {errors.contact &&<p>{errors.contact}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
          Sign up
        </button>
            <span className="form-input-login">
                Already registered? 
                <a href="/login"> Login</a>
            </span>
         </form>
       
     </div>
    )
}

export default FormSignUp;
