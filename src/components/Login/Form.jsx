import React from "react";
import validate from "./validation";
import "./Form.css"

export default function Form(props){

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });

    const handleChange = (evento) => {
        setUserData({
                ...userData,
                [evento.target.name]: evento.target.value,
            }
        );

        setErrors(validate({
                ...userData,
                [evento.target.name]: evento.target.value,
            })
        );
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        props.login(userData);

    }

    return(
      <div className='login'>

          <form onSubmit={(e => handleSubmit(e))} className='form-login'>
              <h2 className='huno'>Sign in</h2>

              <div>
                  <span className='icon'><ion-icon name="mail-outline"></ion-icon></span>
                  {/*<ion-icon name="mail"></ion-icon>*/}
                  <input
                      name='username'
                      type='text'
                      className='username'
                      value={userData.username}
                      onChange={handleChange}
                      // placeholder='Username'
                  /><label>Username</label>
                  <p>{errors.username}</p>
              </div>
              <div>
                  <span className='icon'><ion-icon name="lock-closed-outline"></ion-icon></span>
                  {/*<ion-icon name="lock-closed"></ion-icon>*/}
                  <input
                      name='password'
                      type='password'
                      className='password'
                      value={userData.password}
                      onChange={handleChange}
                      // placeholder='Password'
                  /><label>Password</label>
                  <p>{errors.password}</p>
              </div>
              <button type='submit' className='btn'>Login</button>
          </form>


      </div>
    );
}