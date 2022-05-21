import React, { useState } from 'react';
import {db} from '../firebase'
import {ref,push,child,update} from "firebase/database";

const Register = () => {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [photo, setPhoto] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
        if(id === name){
            setName(value);
        }
        if(id === email){
            setEmail(value);
        }
        if(id === phone){
            setPhone(value);
        }
        if(id === photo){
            setPhoto(value);
        }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form">
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="name">Name</label>
                <input className="form__input" type="text" id="name" placeholder="First Name" onChange = {(e) => handleInputChange(e)} />
            </div>
            <div className="email">
                <label className="form__label" for="email">Email</label>
                <input  type="email" id="email"  className="form__input"placeholder="Email" onChange = {(e) => handleInputChange(e)} />
            </div>
            <div className="phone">
                <label className="form__label" for="phone">Phone</label>
                <input  type="phone" id="phone" className="form__input" placeholder="Phone" onChange = {(e) => handleInputChange(e)} />
            </div>
            <div className="photo">
                <label className="form__label" for="photo">Photo</label>
                <input className="form__input" type="file" id="photo" placeholder="image" onChange = {(e) => handleInputChange(e)} />
            </div>
        </div>
        <div class="footer">
            <button type="submit" class="btn" onClick={()=>handleSubmit()}>Register</button>
        </div>
      </div>      
  )
}

export default Register;