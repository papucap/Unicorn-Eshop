import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { accountTranslations } from "../Profile/accountTranslations";

export default function Login({ lang = "cs" }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const t = accountTranslations.login;

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/profile");
    } else {
      alert(t.errorAlert[lang]);
    }
  };

  return (
    <div>
      <div className="login">
        <h2>{t.title[lang]}</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder={t.emailPlaceholder[lang]}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t.passwordPlaceholder[lang]}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-submit" type="submit">
            {t.submitBtn[lang]}
          </button>
        </form>
        <p>
          {t.noAccount[lang]} <Link to="/register">{t.registerLink[lang]}</Link>
        </p>
      </div>
    </div>
  );
}
