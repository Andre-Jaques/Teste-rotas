import React from 'react';
import {useNavigate} from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard de teste para versionamento</h1>
      <button onClick={()=> navigate('/Profile')}>Profile</button>
      <button onClick={()=> navigate('/Teste')}>teste</button>
    </>
  );
}

export default Dashboard;