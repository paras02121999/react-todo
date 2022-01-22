import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import Layout from '../components/Layout';
import Todos from '../components/Todos';
import '../styles/App.css';

const App = () => {
  const add = (name, tech) => {
    const myTodo = {
      name: name,
      tech: tech
    }
    setData([...data, myTodo])
  }

  let init;
  if (localStorage.getItem("data") === null) {
    init = [];
  }
  else {
    init = JSON.parse(localStorage.getItem("data"))
  }
  const onDelete = (todo) => {
    setData(data.filter((e) => {
      return e !== todo;
    }))
  }

  const [data, setData] = useState(init)

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  return (<>
    <Layout>
      <AddTodo add={add} />
      <Todos data={data} onDelete={onDelete} />
    </Layout>
  </>
  );
}

export default App;
