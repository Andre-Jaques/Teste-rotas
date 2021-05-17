import React from 'react';
import {useNavigate} from 'react-router-dom';

function Teste() {

  const navigate = useNavigate();

  return (
    <>
      <h1>TESTE</h1>
      <button onClick={()=> navigate('/')}>Dashboard</button>
      <button onClick={()=> navigate('/Profile')}>Profile</button>
    </>
  );
}

export default Teste;