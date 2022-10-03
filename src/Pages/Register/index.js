import React, { useState } from "react";
import img from "../../img/logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import ValidationPassword, { ConfirmPassworMsg, passwordValidation } from "../../Components/ValidationPassword";
import { validateEmail } from "../../Components/ValidFormatEmail";
import IconToViewPassword from "../../Components/IconToViewPassword";
import { useNavigate } from "react-router-dom";

import '../Login/style.css';
import './style.css';



export default function SecondComponent() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState(",");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleName = (e) => { setName(e.target.value) };
  const handleMail = (e) => { setMail(e.target.value) };
  const handlePassword = (e) => { setPassword(e.target.value) };
  const handleConfirmPassword = (e) => { setConfirmPassword(e.target.value) };
  const register = () => {
    const valid = validateEmail(mail)
    const validPass = passwordValidation(password)

    if (!valid || !validPass || confirmPassword !== password) {
      alert("Formato de e-mail ou senha invalido")
    } else {
      alert("Cadastrado")
    }

  };
  const navLogin = () => {
    navigate(-1)
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
          <input className="forms" type={(visible === true) ? "password" : "text"} value={password} onChange={handlePassword} placeholder="Senha" />
          <IconToViewPassword visible={visible} visibleSet={() => { setVisible(!visible) }} />
        </div>
        {(password !== "")
          ? < ValidationPassword password={password} />
          : null
        }
        <div className="borderBox">
          <div className="positionIcon">
            <MdOutlineLock className="registerIcon" />
          </div>
          <input className="forms" type={(visible === true) ? "password" : "text"} value={confirmPassword} onChange={handleConfirmPassword} placeholder="Confirme a senha" />
          <IconToViewPassword visible={visible} visibleSet={() => { setVisible(!visible) }} />
        </div>
        {(confirmPassword !== password)
          ? <ConfirmPassworMsg />
          : null
        }
        <div>
          {
            (mail === "" || password === "" || confirmPassword === "")
              ? <button className="registerButton" onClick={register} disabled={true}>Cadastrar</button>
              : <button className="registerButton" onClick={register} >Cadastrar</button>
          }
        </div>
        <div className="singupBox">
          <p className="singupText">Já tem um conta?</p>
          <p className="clickText" onClick={navLogin}>Entrar</p>
        </div>

      </div>
    </div >

  )

}
