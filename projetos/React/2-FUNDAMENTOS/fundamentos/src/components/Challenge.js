
const Challenge = () => {
  const x = (5);
  const y = (15);
  var soma = () => {
    soma = (x + y);
    console.log(soma);
  }

  return (
    <div>
      <div>
        <p>O primeiro valor é: {x}</p>
        <p>O segundo valor é: {y}</p>
      </div>
      <div>
        <button onClick={soma} >Clique aqui para Somar!</button>
      </div>
    </div>
  )

}

export default Challenge;