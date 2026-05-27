import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Můj profil</h1>
        <div style={{ border: '1px solid #ECEEF2', padding: '20px', display: 'inline-block' }}>
          <p><strong>Jméno:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={logout} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px' }}>Odhlásit se</button>
        </div>
      </div>
    </div>
  );
}