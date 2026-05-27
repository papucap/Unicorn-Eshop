import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ContactPage({ lang, setLang }) {
  Console.log(lang);
  return (
    <div>
      <Header lang={lang} setLang={setLang} />

      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
