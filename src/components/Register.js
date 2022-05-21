import React from 'react'

const Register = () => {
  return (
    <div className="form">
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="name">Name</label>
                <input className="form__input" type="text" id="name" placeholder="First Name"/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email</label>
                <input  type="email" id="email"  className="form__input"placeholder="Email"/>
            </div>
            <div className="phone">
                <label className="form__label" for="phone">Phone</label>
                <input  type="phone" id="phone" className="form__input" placeholder="Phone"/>
            </div>
            <div className="photo">
                <label className="form__label" for="photo">Photo</label>
                <input className="form__input" type="file" id="photo" placeholder="image"/>
            </div>
        </div>
        <div class="footer">
            <button type="submit" class="btn">Register</button>
        </div>
      </div>      
  )
}

export default Register;