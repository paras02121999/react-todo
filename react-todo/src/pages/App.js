import React, { useState } from 'react';
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

  return (<>
    <Layout>
      <Todos data={data} onDelete={onDelete} />
    </Layout>
  </>
  );
}

export default App;
