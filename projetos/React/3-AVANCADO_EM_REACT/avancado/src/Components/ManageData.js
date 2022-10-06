import { useState } from 'react';

const ManageData = () => {
  const [number, setNumber] = useState(25);
  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(55)}>Mude o Valor</button>
      </div>
    </div>
  )
}

export default ManageData;