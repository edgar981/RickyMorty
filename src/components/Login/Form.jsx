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
          <h1 className='huno'>Login</h1>
          <form onSubmit={(e => handleSubmit(e))} className='form-login'>
              {/*<label></label>*/}
              <input
                  name='username'
                  type='text'
                  className='username'
                  value={userData.username}
                  onChange={handleChange}
                  placeholder='Username'
              />
              <p>{errors.username}</p>

              {/*<label>: </label>*/}
              <input
                  name='password'
                  type='password'
                  className='password'
                  value={userData.password}
                  onChange={handleChange}
                  placeholder='Password'
              />
              <p>{errors.password}</p>
              <button type='submit' className='btn'>LOGIN</button>
          </form>
      </div>
    );
}