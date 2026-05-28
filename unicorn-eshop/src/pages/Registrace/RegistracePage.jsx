import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Register from "../../components/Registrace/Registrace";
import "./RegistracePage.css";

const ProfilePage = ({ lang, setLang }) => {
  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <Register lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default ProfilePage;
