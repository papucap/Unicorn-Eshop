import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login/Login";
import "./LoginPage.css";

export default function ProfilePage({ lang, setLang }) {
  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <Login lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
