import './App.css';
import Form from './component/Form';
import ShowData from './component/ShowData';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const UserContext = React.createContext([]);

function App() {
  const [userData, setUserData] = useState([]);
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <div className="App">

        <Routes>
          <Route path='/showdata' element={<ShowData></ShowData>}></Route>
          <Route path='/' element={<Form></Form>}></Route>
        </Routes>

      </div>
    </UserContext.Provider>
  );
}

export default App;
