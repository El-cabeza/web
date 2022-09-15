import React, { useState } from "react";
import img from "../img/logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";


export default function SecondComponent() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleName = (e) => { setName(e.target.value) };
  const handleMail = (e) => { setMail(e.target.value) };
  const handlePassword = (e) => { setPassword(e.target.value) };
  const register = () => {
    const valid = validateEmail(mail)
    if (!valid) {
      alert("Formato de e-mail invalido");
    } else {
      alert("Cadastrado");

    }
  };
  const validateEmail = (mail) => {
    var re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    return re.test(mail);
  }

  return (
    <div className="main">
      <div className="logo">
        <img src={img} className="logoImg" alt="Caveira com chapeu de cangaceiro em chamas" />
      </div>
      <div className="registerBox">
        <div className="borderBox">
          <div className="positionIcon">
            <BsFillPersonFill className="registerIcon" />
          </div>
          <input className="forms" type="text" value={name} onChange={handleName} placeholder="Nome Completo" />
        </div>
        <div className="borderBox">
          <div className="positionIcon">
            <MdOutlineMail className="registerIcon" />
          </div>
          <input className="forms" type="email" value={mail} onChange={handleMail} placeholder="E-mail" />
        </div>
        <div className="borderBox">
          <div className="positionIcon">
            <MdOutlineLock className="registerIcon" />
          </div>
          <input className="forms" type="password" value={password} onChange={handlePassword} placeholder="Senha" />
        </div>
        <div>
          {
            (mail === "" || password === "" || password === "")
              ? <button className="registerButton" onClick={register} disabled={true}>Cadastrar</button>
              : <button className="registerButton" onClick={register} >Cadastrar</button>
          }
        </div>
        <p>Já tem um conta? <a href="./app">Entrar</a></p>

      </div>
    </div >

  )

}
