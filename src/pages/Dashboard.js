import React from 'react';
import {useNavigate} from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  return (
    <>
      <a href="/Profile">Dashboard de teste para versionamento</a>
      <button onClick={()=> navigate('/Profile')}>Clique aqui</button>
    </>
  );
}

export default Dashboard;