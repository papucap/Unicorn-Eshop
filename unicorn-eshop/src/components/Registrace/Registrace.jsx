import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Registrace.css'

export default function Register() {
  const [formData, setFormData] = React.useState({ name: '', lastName: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Hesla se neshodují!');
      return; 
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === formData.email)) {
      alert('Tento email už je registrovaný!');
      return;
    }

    const newUser = { ...formData };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    alert('Registrace úspěšná!');
    navigate('/profile');


  };

  return (
    <div>
      <div className='registrace'>
        <h2>Vytvořit účet</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Jméno" onChange={e => setFormData({...formData, name: e.target.value})} required />
          <input type="text" placeholder="Příjmení" onChange={e => setFormData({...formData, lastName: e.target.value})} required />
          <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
          <input type="password" placeholder="Heslo" onChange={e => setFormData({...formData, password: e.target.value})} required />
          <input type="password" placeholder="Potvrďte heslo" onChange={e => setFormData({...formData, confirmPassword: e.target.value})} required />
          <button type="submit">Zaregistrovat se</button>
        </form>
        <p>Máte účet? <Link to="/login">Přihlaste se</Link></p>
      </div>
    </div>
  );
}
