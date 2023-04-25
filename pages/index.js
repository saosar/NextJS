import { useState } from 'react';

const Index = () => {
  // Cambio al escribir en la barra
  const [userInput, setUserInput] = useState('');
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Crear encima de otro list al dar click en Submit
  const [todoList, setTodoList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([userInput, ...todoList]);
    setUserInput('');
  };

  // Borrar un elemento de la lista
  const handleDelete = (todo) => {
    const updatedArr = todoList.filter((todoItem) => todoItem !== todo);
    setTodoList(updatedArr);
  };

  return (
    <div>
      <h1>Next.js Todo List</h1>
      <form>
        <input
          type="text"
          value={userInput}
          placeholder={'Enter a to do'}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {todoList.length >= 1 ? (
          todoList.map((todo, idx) => (
            <li key={idx}>
              {todo}
              <button onClick={() => handleDelete(todo)}>Delete</button>
            </li>
          ))
        ) : (
          <p>Add an element</p>
        )}
      </ul>
    </div>
  );
};

export default Index;
