import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import IconToViewPassword from "../../Components/IconToViewPassword";
import { validateEmail } from "../../Components/ValidFormatEmail";


import './style.css';
import img1 from "../../img/logo.png";



export default function FirstComponent() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
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
  const navRegister = () => {
    navigate('/register')
  }
  const teste = async () => {
    try {
      const header = {
        method: "GET"
      }
      await fetch(`https://viacep.com.br/ws/${email}/json/`, header)
        .then(
          async response => response.json()
        )
        .then(
          async response => console.log(response)
        )
    } catch (error) {
      console.log(error);
    }

  }


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
          <input className="forms" type={(visible === true) ? "password" : "text"} value={password} onChange={handlePassword} placeholder="Senha" />
          <IconToViewPassword visible={visible} visibleSet={() => { setVisible(!visible) }} />
        </div>
        <p className="forgiveText"><a href="./app.js">Esqueci minha senha</a></p>
        <div>
          {
            (email === "" || password === "")
              ? <button className="buttonEnter" onClick={login} disabled={true}>Entrar</button>
              : <button className="buttonEnter" onClick={login} >Entrar</button>
          }
          <button className="buttonEnter" onClick={teste} >TESTE</button>
        </div>
        <div className="singupBox">
          <p className="singupText">Não tem uma conta?</p>
          <p className="clickText" onClick={navRegister}> Cadastre-se</p>
        </div>
      </div>
    </div >
  )
}




