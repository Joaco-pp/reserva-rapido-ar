import {registerUser} from '../../../api/user/userService'

export default function RegisterUser(){
    return (<>
    <form action="" method="post" id="form" className="form">
        <div className="form-header">
            <div className="logo"></div>
            <h1>Registrate</h1>
        </div>

      <div className="form-body">
        <input autoFocus type="text" name="username" id="username" required /><span
          className="barra"></span>
        <div className="tag"><label className="label" >Usuario</label></div>

        <div className="tag"><label className="label" >
          Email
        <input type="email" name="email" id="email" required />
        </label></div>

        <input type="password" name="password" id="password" required /><span className="barra"></span><div className="tag"><label className="label">Contraseña</label></div>

        <input type="password" name="confirmedPassword" id="confirmPassword" required /><span
          className="barra"></span><div className="tag"><label className="label">Confirme contraseña</label></div>

        <button type="submit" id="formSubmit">Registrarse</button>

        <span className="warning" id="warning"></span>
        <a href="#" className="register_anchor">¿Ya tenés una cuenta? Inicia sesión</a>
      </div>
    </form>
    </>)
}