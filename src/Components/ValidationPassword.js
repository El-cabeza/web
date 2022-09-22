import { useEffect } from "react"
import './ValidationPassword.css'
import { MdCheckCircle } from 'react-icons/md'


export default function ValidateMsg({ password }) {

  let minCharacters = /^.{8,}$/
  let upperCase = /^(?=.*[A-Z])[0-9a-zA-Z!$*&@#]{1,}$/
  let lowerCase = /^(?=.*[a-z])[0-9a-zA-Z!$*&@#]{1,}$/
  let specialCharacters = /^(?=.*[!$*&@#])[0-9a-zA-Z!$*&@#]{1,}$/
  let numeric = /^(?=.*[0-9])[0-9a-zA-Z!$*&@#]{1,}$/
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])(?=.*[0-9])[0-9a-zA-Z!$*&@#]{8,}$/

  useEffect(() => { }
    , [password])


  return (
    <div className="passwordRequire">
      {
        (regexPassword.test(password) === true)
          ? null
          : <p>Sua senha deve conter: </p>
      }
      <div className="checkCircle">
        {(minCharacters.test(password) === true) &&
          <MdCheckCircle />
        }
        <p className="textPass" style={{ marginLeft: (minCharacters.test(password) === true) ? 10 : 25 }}>8 ou mais carácteres</p>
      </div>

      {
        (upperCase.test(password) === true)
          ? null
          : <p>No mínimo uma letra maiúscula</p>
      }
      {
        (lowerCase.test(password) === true)
          ? null
          : <p>No mínimo uma letra minúscula</p>
      }
      {
        (specialCharacters.test(password) === true)
          ? null
          : <p>No mínimo um caráter especial</p>
      }
      {
        (numeric.test(password) === true)
          ? null
          : <p>No mínimo um número</p>
      }

    </div>

  )


}

export function ConfirmPassworMsg() {
  return (
    <dir className="passwordRequire">
      <p>As senhas não conferem</p>
    </dir>
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

