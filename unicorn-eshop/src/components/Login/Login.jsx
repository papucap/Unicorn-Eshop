import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'


export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/profile');
    } else {
      alert('Chybné údaje!');
    }
  };

  return (
    <div>
      <div className='login'>
        <h2>Přihlášení</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Heslo" onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Přihlásit se</button>
        </form>
        <p>Nemáte účet? <Link to="/register">Zaregistrujte se</Link></p>
      </div>
    </div>
  );
}