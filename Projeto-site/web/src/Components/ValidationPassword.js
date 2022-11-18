import { useEffect } from "react"
import './ValidationPassword.css'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'


export default function ValidateMsg({ password }) {

  let minCharacters = /^.{8,}$/
  let upperCase = /^(?=.*[A-Z])[0-9a-zA-Z!$*&@#]{1,}$/
  let lowerCase = /^(?=.*[a-z])[0-9a-zA-Z!$*&@#]{1,}$/
  let specialCharacters = /^(?=.*[!$*&@#])[0-9a-zA-Z!$*&@#]{1,}$/
  let numeric = /^(?=.*[0-9])[0-9a-zA-Z!$*&@#]{1,}$/

  useEffect(() => { }
    , [password])


  return (
    <div className="passwordRequire">
      <p style={{ fontWeight: "bold" }}>Sua senha deve conter: </p>
      <div className="checkCircle">
        {(minCharacters.test(password) === true)
          ? <AiFillCheckCircle />
          : <AiFillCloseCircle className="check-color" />
        }
        <p className="textPass" style={{ marginLeft: 8 }}> 8 ou mais carácteres</p>
      </div>
      <div className="checkCircle">
        {(upperCase.test(password) === true)
          ? <AiFillCheckCircle />
          : <AiFillCloseCircle className="check-color" />
        }
        <p className="textPass" style={{ marginLeft: 8 }}>No mínimo uma letra maiúscula</p>
      </div>
      <div className="checkCircle">
        {(lowerCase.test(password) === true)
          ? <AiFillCheckCircle />
          : <AiFillCloseCircle className="check-color" />
        }
        <p className="textPass" style={{ marginLeft: 8 }}>No mínimo uma letra minúscula</p>
      </div>
      <div className="checkCircle">
        {(specialCharacters.test(password) === true)
          ? <AiFillCheckCircle />
          : <AiFillCloseCircle className="check-color" />
        }
        <p className="textPass" style={{ marginLeft: 8 }}>No mínimo um caráter especial</p>
      </div>
      <div className="checkCircle">
        {(numeric.test(password) === true)
          ? <AiFillCheckCircle />
          : <AiFillCloseCircle className="check-color" />
        }
        <p className="textPass" style={{ marginLeft: 8 }}>No mínimo um número.</p>
      </div>
    </div>

  )


}

export function ConfirmPassworMsg() {
  return (
    <div className="passwordRequire">
      <div className="checkCircle">
        <AiFillCloseCircle className="check-color" />
        <p style={{ marginLeft: 8, color: "white" }}>As senhas não conferem</p>
      </div>
    </div>
  )

}

export const passwordValidation = (password) => {

  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])(?=.*[0-9])[0-9a-zA-Z!$*&@#]{8,}$/
  return regexPassword.test(password)

}

/* <div className="passwordRequire">
{
  (regexPassword.test(password) === true)
    ? <p className="checkText">Sua senha deve conter:</p>
    : <p>Sua senha deve conter:</p>
}
{
  (minCharacters.test(password) === true)
    ? <p className="checkText">8 ou mais carácteres</p>
    : <p>8 ou mais carácteres</p>
}
{
  (upperCase.test(password) === true)
    ? <p className="checkText">Pelo menos uma letra maiúscula</p>
    : <p>Pelo menos uma letra maiúscula</p>
}
{
  (lowerCase.test(password) === true)
    ? <p className="checkText">Pelo menos uma letra minúscula</p>
    : <p>Pelo menos uma letra minúscula</p>
}
{
  (specialCharacters.test(password) === true)
    ? <p className="checkText">Pelo menos um caráter especial</p>
    : <p>Pelo menos um caráter especial</p>
}
{
  (numeric.test(password) === true)
    ? <p className="checkText">Pelo menos um número</p>
    : <p>Pelo menos um número</p>
}

</div> */

