import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className="principal">
      <h1>Iniciar sesión</h1>
      <form>
        <div className="loginputBox">
          <input
            type="text"
            name="text"
            required
          />
          <label className='loglabel'>Usuario</label>
        </div>
        <div className="loginputBox">
          <input
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          <label className='loglabel'>Contraseña</label>
        </div>
        <input className='loginputBox' type="submit" name="sign-in" value="Iniciar sesión" />
      </form>
      <p className='registerp'>¿No tienes una cuenta? <a className='registera' href="/register">Regístrate aquí</a></p>
    </div>
  );
};

export default Login;