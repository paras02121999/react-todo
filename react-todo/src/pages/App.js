import React, { useState } from 'react';
import AddTodo from '../components/AddTodo';
import Layout from '../components/Layout';
import Todos from '../components/Todos';
import '../styles/App.css';

const App = () => {
  const [data, setData] = useState([
    {
      name: "Paras Mehta",
      tech: "React.js"
    },
    {
      name: "Raj Patel",
      tech: "ASP.net"
    },
    {
      name: "Amit Shah",
      tech: "Python"
    }
  ])

  const onDelete = (todo) => {
    setData(data.filter((e) => {
      return e !== todo;
    }))
  }

  const add = (name, tech) => {
    const myTodo = {
      name: name,
      tech: tech
    }
    setData([...data, myTodo])
  }

  return (<>
    <Layout>
      <AddTodo add={add} />
      <Todos data={data} onDelete={onDelete} />
    </Layout>
  </>
  );
}

export default App;
