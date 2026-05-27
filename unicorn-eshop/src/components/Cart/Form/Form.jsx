import "./Form.css";

export default function Form({ formData, setFormData, onBack, onNext }) {
  const set = (key) => (e) =>
    setFormData(prev => ({
      ...prev,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  return (
    <div>
      <h1 className="delivery-heading">Dodací údaje</h1>
      <div className="delivery-card">
        <div className="form-row">
          <div className="field">
            <label htmlFor="fname">Jméno</label>
            <input id="fname" type="text" value={formData.firstName} onChange={set("firstName")} />
          </div>
          <div className="field">
            <label htmlFor="lname">Příjmení</label>
            <input id="lname" type="text" value={formData.lastName} onChange={set("lastName")} />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" value={formData.email} onChange={set("email")} />
          </div>
          <div className="field">
            <label htmlFor="phone">Mobil</label>
            <div className="phone-wrap">
              <div className="phone-prefix"><span>🇨🇿</span><span>+420</span></div>
              <input id="phone" type="tel" value={formData.phone} onChange={set("phone")} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="street">Ulice a číslo</label>
            <input id="street" type="text" value={formData.street} onChange={set("street")} />
          </div>
          <div className="field">
            <label htmlFor="city">Město</label>
            <input id="city" type="text" value={formData.city} onChange={set("city")} />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="zip">PSČ</label>
            <input id="zip" type="text" value={formData.zip} onChange={set("zip")} />
          </div>
          <div className="field">
            <label htmlFor="country">Stát</label>
            <input id="country" type="text" value={formData.country} onChange={set("country")} />
          </div>
        </div>
        <div className="checks">
          <label className="check-row">
            <input type="checkbox" checked={formData.billing} onChange={set("billing")} />
            Chci zadat jiné fakturační údaje
          </label>
          <label className="check-row">
            <input type="checkbox" checked={formData.marketing} onChange={set("marketing")} />
            Souhlasím se zpracováním osobních údajů pro marketingové účely.
          </label>
        </div>
        <p className="terms">
          Odesláním objednávky souhlasíte s <a href="/terms">obchodními podmínkami.</a>
        </p>
      </div>
      <div className="btn-row">
        <button onClick={onBack}>‹ Zpět</button>
        <button onClick={onNext}>Dále ›</button>
      </div>
    </div>
  );
}