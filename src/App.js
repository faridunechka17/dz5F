import React, {useState} from 'react';

const App = () => {

    const [main, setMain] = useState([])
    const [create, setCreate] = useState('')

    const push = (event) => {
        setCreate(event.target.value)
    }

    const menu = () => {
        setMain([...main, create])
        setCreate('')
    }

    const buttonType = (id) => {
      const param = [...main]
        param[id] = create
        setMain(param)
        setCreate('')
    }

  return (
      <div>

          <form onSubmit={(event) => event.preventDefault() }>
              <input type="text" value={create} onInput={(e) => push(e)}/>
              <button type='button' disabled={!create} onClick={menu}>Добавить</button>
              {main.length > 0 ? (main.map((type, id) => (<div key={id}>
                  <h2>{type}</h2>
                  <button type='button' disabled={!create} onClick={() => buttonType(id)}>Поменять</button>
              </div>))): (<p>Список пуст</p>)}
          </form>

      </div>
  );
};

export default App;
