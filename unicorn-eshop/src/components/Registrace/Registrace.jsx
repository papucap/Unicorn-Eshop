import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Registrace.css";
import { accountTranslations } from "../Profile/accountTranslations";

export default function Register({ lang = "cs" }) {
  const [formData, setFormData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const t = accountTranslations.register;

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert(t.alertMismatch[lang]);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === formData.email)) {
      alert(t.alertExists[lang]);
      return;
    }

    const newUser = { ...formData };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    alert(t.alertSuccess[lang]);
    navigate("/profile");
  };

  return (
    <div>
      <div className="registrace">
        <h2>{t.title[lang]}</h2>
        <form className="registrace-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder={t.namePlaceholder[lang]}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder={t.lastNamePlaceholder[lang]}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder={t.emailPlaceholder[lang]}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder={t.passwordPlaceholder[lang]}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder={t.confirmPasswordPlaceholder[lang]}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
          />
          <button className="registrace-submit" type="submit">
            {t.submitBtn[lang]}
          </button>
        </form>
        <p>
          {t.hasAccount[lang]} <Link to="/login">{t.loginLink[lang]}</Link>
        </p>
      </div>
    </div>
  );
}
