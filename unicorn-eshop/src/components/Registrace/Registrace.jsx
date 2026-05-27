import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === formData.email)) {
      alert('Tento email už je registrovaný!');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registrace úspěšná!');
    navigate('/profile');
  };

  return (
    <div>
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Registrace</h2>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
          <input type="text" placeholder="Jméno" onChange={e => setFormData({...formData, name: e.target.value})} required />
          <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
          <input type="password" placeholder="Heslo" onChange={e => setFormData({...formData, password: e.target.value})} required />
          <button type="submit">Zaregistrovat se</button>
        </form>
        <p>Máte účet? <Link to="/login">Přihlaste se</Link></p>
      </div>
)    </div>
  );
}