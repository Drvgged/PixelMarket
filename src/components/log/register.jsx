import React from 'react'
import './register.css';

const Register = () => {
  return (
    <div className="principal">
      <h1>Crea tu cuenta</h1>
      <form>
      <div className="inputBox">
          <input
            type="email"
            name="email"
            required
          />
          <label className='reglabel'>Correo</label>
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="text"
            required
          />
          <label className='reglabel'>Usuario</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          <label className='reglabel'>Contraseña</label>
        </div>
        <div className='termycond'>
        <label>
            Acepto los <a className='acepterm' href="terminos-y-condiciones">Términos y Condiciones</a>
            <input type="checkbox" className='check'/>
          </label>
        </div>
        <input type="submit" name="sign-in" value="Registrarse" />
      </form>
    </div>
  );
};

export default Register;