import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  React.useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const logout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!user) return null;

  return (
    <div>
      <div className='profil'>
        <h1>Vaše údaje</h1>
        <div className='udaje'>
          <p><strong>Jméno:</strong> {user.name}</p>
          <p><strong>Příjmení:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Heslo:</strong> {user.password}</p>
          <br></br>
          <button className='out' onClick={logout} >Odhlásit se</button>
        </div>
      </div>
    </div>
  );
}