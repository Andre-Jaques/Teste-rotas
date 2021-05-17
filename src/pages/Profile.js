import React from 'react';
import {useNavigate} from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  return (
    
     <>
     <h1>Profile</h1>
     <h2>Subtitulo do Profile</h2>
     <button onClick={()=> navigate('/')}>Dashboard</button>
      <button onClick={()=> navigate('/Teste')}>teste</button>
     </>
  
  );
}

export default Profile;