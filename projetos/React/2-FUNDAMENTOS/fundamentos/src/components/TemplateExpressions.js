import MyComponent from "./MyComponent";

const TemplateExpressions = () => {

  const name = "Douglas";
  const data = {
    age: '31',
    job: 'Programmer'


  }
  return (

    <div>

      <h1>Olá {name}, tudo bem?</h1>
      <p>Voce atua como: {data.job}</p>
      <p>{8 + 8}</p>
      <MyComponent />
    </div>
  )
}

export default TemplateExpressions;