import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { accountTranslations } from "./accountTranslations";

export default function Profile({ lang = "cs" }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const t = accountTranslations.profile;

  React.useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div>
      <div className="profil">
        <h1>{t.title[lang]}</h1>
        <div className="udaje">
          <p>
            <strong>{t.name[lang]}:</strong> {user.name}
          </p>
          <p>
            <strong>{t.lastName[lang]}:</strong> {user.lastName}
          </p>
          <p>
            <strong>{t.email[lang]}:</strong> {user.email}
          </p>
          <p>
            <strong>{t.password[lang]}:</strong> {user.password}
          </p>
          <br />
          <button className="profile-out" onClick={logout}>
            {t.logoutBtn[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
