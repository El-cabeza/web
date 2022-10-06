import { useState } from "react"

const CondicionalRender = () => {
  const [x] = useState(false);

  const [name, setState] = useState("Letycia");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, Sim!</p>}
      {!x && <p>Agora x é Falso</p>}

      <h1>If Ternário</h1>
      {
        name === 'Douglas'
          ? (
            <div>
              <p>O nome é Douglas</p>
            </div>
          ) : (
            <div>
              <p>Nome não encontrado!!!</p>
            </div>
          )
      }
      <button onClick={() => setState('Douglas')}>Clique aqui!</button>
    </div>
  )
}

export default CondicionalRender