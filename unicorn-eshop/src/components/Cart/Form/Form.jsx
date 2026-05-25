import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    billing: false, marketing: false,
  });

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  return (
    <div>
      <h1 className="delivery-heading">Dodací údaje</h1>

      <div className="delivery-card">

        <div className="form-row">
          <div className="field">
            <label htmlFor="fname">Jméno</label>
            <input id="fname" type="text" value={form.firstName} onChange={set("firstName")} />
          </div>
          <div className="field">
            <label htmlFor="lname">Příjmení</label>
            <input id="lname" type="text" value={form.lastName} onChange={set("lastName")} />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" value={form.email} onChange={set("email")} />
          </div>
          <div className="field">
            <label htmlFor="phone">Mobil</label>
            <div className="phone-wrap">
              <div className="phone-prefix">
                <span>🇨🇿</span>
                <span>+420</span>
              </div>
              <input id="phone" type="tel" value={form.phone} onChange={set("phone")} />
            </div>
          </div>
        </div>

        <div className="checks">
          <label className="check-row">
            <input type="checkbox" checked={form.billing} onChange={set("billing")} />
            Chci zadat jiné fakturační údaje
          </label>
          <label className="check-row">
            <input type="checkbox" checked={form.marketing} onChange={set("marketing")} />
            Souhlasím se zpracováním svých osobních údajů pro marketingové účely.
          </label>
        </div>

        <p className="terms">
          Odesláním objednávky souhlasíte s <a href="/terms">obchodními podmínkami.</a>
        </p>
      </div>
    </div>
  );
}