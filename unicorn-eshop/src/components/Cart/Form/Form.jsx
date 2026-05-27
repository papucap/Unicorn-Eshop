import { useState } from "react";
import "./Form.css";

const FIELDS = [
  { key: "firstName", label: "Jméno",        type: "text" },
  { key: "lastName",  label: "Příjmení",      type: "text" },
  { key: "email",     label: "E-mail",         type: "email" },
  { key: "phone",     label: "Mobil",          type: "tel" },
  { key: "street",    label: "Ulice a číslo",  type: "text" },
  { key: "city",      label: "Město",          type: "text" },
  { key: "zip",       label: "PSČ",            type: "text" },
  { key: "country",   label: "Stát",           type: "text" },
];

export default function Form({ formData, setFormData, onBack, onNext }) {
  const [errors, setErrors] = useState({});

  const set = (key) => (e) =>
    setFormData(prev => ({ ...prev, [key]: e.target.value }));

  const handleNext = () => {
    const newErrors = {};
    FIELDS.forEach(({ key, label }) => {
      if (!formData[key]?.trim()) newErrors[key] = `Zadejte ${label.toLowerCase()}`;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onNext();
  };

  return (
    <div>
      <h1 className="delivery-heading">Dodací údaje</h1>
      <div className="delivery-card">
        <div className="form-row">
          {FIELDS.map(({ key, label, type }) => (
            <div className="field" key={key}>
              <label htmlFor={key}>{label}</label>
              {type === "tel" ? (
                <div className="phone-wrap">
                  <div className="phone-prefix"><span>🇨🇿</span><span>+420</span></div>
                  <input id={key} type="tel" value={formData[key]} onChange={set(key)} />
                </div>
              ) : (
                <input id={key} type={type} value={formData[key]} onChange={set(key)} />
              )}
              {errors[key] && <p className="error">{errors[key]}</p>}
            </div>
          ))}
        </div>
        <div className="checks">
          <label className="check-row">
            <input type="checkbox" checked={formData.billing} onChange={e => setFormData(p => ({ ...p, billing: e.target.checked }))} />
            Chci zadat jiné fakturační údaje
          </label>
          <label className="check-row">
            <input type="checkbox" checked={formData.marketing} onChange={e => setFormData(p => ({ ...p, marketing: e.target.checked }))} />
            Souhlasím se zpracováním osobních údajů pro marketingové účely.
          </label>
        </div>
        <p className="terms">
          Odesláním objednávky souhlasíte s <a href="/terms">obchodními podmínkami.</a>
        </p>
      </div>
      <div className="btn-row">
        <button onClick={onBack}>‹ Zpět</button>
        <button onClick={handleNext}>Dále ›</button>
      </div>
    </div>
  );
}