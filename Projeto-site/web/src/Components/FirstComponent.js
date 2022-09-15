import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import img1 from "../img/logo.png";



export default function FirstComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = e => { setEmail(e.target.value) };
  const handlePassword = e => { setPassword(e.target.value) };
  const login = () => {
    const valid = validateEmail(email)
    if (!valid) {
      alert("formato de email invalido");
    } else {
      alert("Enviado");

    }
  };
  const validateEmail = (email) => {
    var re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    return re.test(email);
  }

  console.log(email)
  return (
    <div className="main">
      <div className="logo">
        <img src={img1} className="logo-img" alt="Caveira com chapeu de cangaceiro em chamas" />
      </div>
      <div className="loginBox">
        <div className="boxBorder">
          <div className="positionIcon">
            <MdOutlineMail className="icon" />
          </div>
          <input className="forms" type="email" value={email} onChange={handleEmail} placeholder="E-mail" />
        </div>
        <div className="boxBorder">
          <div className="positionIcon">
            <MdOutlineLock className="icon" />
          </div>
          <input className="forms" type="password" value={password} onChange={handlePassword} placeholder="Senha" />
        </div>
        <p className="forgiveText"><a href="./app.js">Esqueci minha senha</a></p>
        <div>
          {
            (email === "" || password === "")
              ? <button className="buttonEnter" onClick={login} disabled={true}>Entrar</button>
              : <button className="buttonEnter" onClick={login} >Entrar</button>
          }
        </div>
        <p className="singupText">Não tem uma conta? <a href="./app.js">Cadastre-se</a> </p>
      </div>


    </div >
  )
}




