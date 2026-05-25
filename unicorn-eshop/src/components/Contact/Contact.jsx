import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1>Kontaktujte nás</h1>
        <p>
          Máte dotazy, připomínky nebo potřebujete pomoc? Jsme tu pro vás!
          Kontaktujte nás prostřednictvím níže uvedených informací nebo nám
          napište zprávu.
        </p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <h2>ZÁKAZNICKÁ PODPORA</h2>
          <p>veloot@eshop.cz</p>
          <p>+420 123 456 789</p>

          <h2>SPOLUPRACE</h2>
          <p>marketing@veloot.cz</p>

          <h2>OBCHODY</h2>
          <p>Na Příkopě 858/20</p>
          <p>110 00 Praha 1</p>
          <p>veloot@shop.cz</p>
          <p>+420 566 443 366</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Napište nám</h2>
        <form>
          <input type="text" placeholder="Vaše jméno" required />
          <input type="email" placeholder="Váš email" required />
          <textarea placeholder="Vaše zpráva" required></textarea>
          <button type="submit">Odeslat</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
