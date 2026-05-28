import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Profile from "../../components/Profile/Profile";
import "./ProfilePage.css";

export default function ProfilePage({ lang, setLang }) {
  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <Profile lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
