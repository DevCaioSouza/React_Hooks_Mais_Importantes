import { useState } from 'react';

const App = () => {
  //     state   função q altera o state
  // const [count, setCount] = useState(0)

  const [state, setState] = useState({ count: 0, theme: "light" });

  // const incrementCount = () => {
  //   setCount(count + 1)
  // }

  //a forma recomendada seria essa, com prevState em uma callback fn
  const incrementCount = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1
      }
    })
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={incrementCount} >Incrementar</button>
    </div>
  );
};

export default App;

//useState armazena state nos nossos componentes funcionais
//hooks só podem ser utilizados dentro de componentes funcionais

//o n° de vezes q um hook é executado nunca pode mudar, então não
//dá p colocar o hook em função, em if, etc

//podemos usar objetos no useState