//Componentes
import ManageData from "./Components/ManageData";
import ListRender from "./Components/ListRender";
import CondicionalRender from "./Components/CondicionalRender";
import ShowUserName from "./Components/ShowUserName";
import { useState } from "react";
import CarDetails from "./Components/CarDetails";

//imagens
import city from "./Assets/city.jpg";

//CSS
import './App.css';

function App() {

  const [userName] = useState('Letycia');

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Vermelha', km: 0, newCar: true },
    { id: 2, brand: 'Lamborghini', color: 'Violeta', km: 12354, newCar: false },
    { id: 3, brand: 'Porche', color: 'Branca', km: 0, newCar: true },
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em React */}
      <div>
        <img src="./img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={city} alt="imagem da cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* {Props} */}
      <ShowUserName name={userName} />
      {/* {Destruturing} */}
      <CarDetails brand='VW' km={120.587} color='Vermelho' newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand='Fiat' km={0} color='Preto' newCar={true} />
      <CarDetails brand='Ford' km={4500} color='Prata' newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}

        />
      ))}
    </div>
  );
}

export default App;
