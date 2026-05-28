import "./Contact.css";

import { contactTranslations } from "./contactTranslations.js";

function Contact({ lang = "cs" }) {
  return (
    <>
      <div className="contact-container">
        <h1>{contactTranslations.title[lang]}</h1>
        <p>{contactTranslations.description[lang]}</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h2>{contactTranslations.support[lang]}</h2>
          <p>veloot@eshop.cz</p>
          <p>+420 123 456 789</p>

          <h2>{contactTranslations.collab[lang]}</h2>
          <p>marketing@veloot.cz</p>

          <h2>{contactTranslations.stores[lang]}</h2>
          <p>Na Příkopě 858/20</p>
          <p>110 00 Praha 1</p>
          <p>veloot@shop.cz</p>
          <p>+420 566 443 366</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>{contactTranslations.formTitle[lang]}</h2>
        <form>
          <input
            type="text"
            placeholder={contactTranslations.namePlaceholder[lang]}
            required
          />
          <input
            type="email"
            placeholder={contactTranslations.emailPlaceholder[lang]}
            required
          />
          <textarea
            placeholder={contactTranslations.messagePlaceholder[lang]}
            required
          ></textarea>
          <button type="submit">{contactTranslations.submitBtn[lang]}</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
