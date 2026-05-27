import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


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
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Přihlášení</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Heslo" onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Přihlásit se</button>
        </form>
        <p>Nemáte účet? <Link to="/register">Zaregistrujte se</Link></p>
      </div>
    </div>
  );
}