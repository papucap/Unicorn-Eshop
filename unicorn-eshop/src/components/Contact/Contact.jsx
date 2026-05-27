import "./Contact.css";

function Contact({ lang = "en" }) {
  const translations = {
    title: { cs: "Kontaktujte nás", en: "Contact Us" },
    description: {
      cs: "Máte dotazy, připomínky nebo potřebujete pomoc? Jsme tu pro vás! Kontaktujte nás prostřednictvím níže uvedených informací nebo nám napište zprávu.",
      en: "Have questions, feedback, or need help? We're here for you! Contact us using the information below or send us a message.",
    },
    support: { cs: "ZÁKAZNICKÁ PODPORA", en: "CUSTOMER SUPPORT" },
    collab: { cs: "SPOLUPRACE", en: "COLLABORATION" },
    stores: { cs: "OBCHODY", en: "OUR STORES" },
    formTitle: { cs: "Napište nám", en: "Write to us" },
    namePlaceholder: { cs: "Vaše jméno", en: "Your name" },
    emailPlaceholder: { cs: "Váš email", en: "Your email" },
    messagePlaceholder: { cs: "Vaše zpráva", en: "Your message" },
    submitBtn: { cs: "Odeslat", en: "Submit" },
  };

  return (
    <>
      <div className="contact-container">
        <h1>{translations.title[lang]}</h1>
        <p>{translations.description[lang]}</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h2>{translations.support[lang]}</h2>
          <p>veloot@eshop.cz</p>
          <p>+420 123 456 789</p>

          <h2>{translations.collab[lang]}</h2>
          <p>marketing@veloot.cz</p>

          <h2>{translations.stores[lang]}</h2>
          <p>Na Příkopě 858/20</p>
          <p>110 00 Praha 1</p>
          <p>veloot@shop.cz</p>
          <p>+420 566 443 366</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>{translations.formTitle[lang]}</h2>
        <form>
          <input
            type="text"
            placeholder={translations.namePlaceholder[lang]}
            required
          />
          <input
            type="email"
            placeholder={translations.emailPlaceholder[lang]}
            required
          />
          <textarea
            placeholder={translations.messagePlaceholder[lang]}
            required
          ></textarea>
          <button type="submit">{translations.submitBtn[lang]}</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
