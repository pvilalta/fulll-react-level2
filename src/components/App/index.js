import React, { useState } from 'react';

import './App.css';
import SearchBar from '../SearchBar';
import List from '../List';

const App = () => {
  const [data, setData] = useState({});

  const { items } = data;

  return (
    <div className="App">
      <div className="container">
        <SearchBar data={data} setData={setData} />
        {items && <List items={items} />}
      </div>
    </div>
  );
};

export default App;
