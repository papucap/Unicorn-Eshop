import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutUsComponent from "../../components/AboutUs/AboutUs";

export default function AboutUs({ lang, setLang }) {
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <NavBar lang={lang} />
      <AboutUsComponent lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
