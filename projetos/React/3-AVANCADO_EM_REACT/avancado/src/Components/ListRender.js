import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Douglas', 'Letycia', 'Brie', 'Leia'])

  const [users, setUsers] = useState([
    { id: 1, name: 'Douglas', age: 31 },
    { id: 2, name: 'Letycia', age: 24 },
    { id: 3, name: 'Brie', age: 1 },
    { id: 4, name: 'Leia', age: 6 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    console.log(randomNumber)
    setUsers((prevUsers) => {

      return prevUsers.filter((user) => randomNumber !== user.id)

    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random User</button>
    </div >
  );
};

export default ListRender