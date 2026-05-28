import { useState } from "react";
import "./Form.css";
import { cartTranslations } from "../cartTranslations";

const FIELDS = [
  { key: "firstName", type: "text" },
  { key: "lastName", type: "text" },
  { key: "email", type: "email" },
  { key: "phone", type: "tel" },
  { key: "street", type: "text" },
  { key: "city", type: "text" },
  { key: "zip", type: "text" },
  { key: "country", type: "text" },
];

export default function Form({
  formData,
  setFormData,
  onBack,
  onNext,
  lang = "cs",
}) {
  const [errors, setErrors] = useState({});
  const t = cartTranslations.form;
  const shared = cartTranslations.shared;

  const set = (key) => (e) =>
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleNext = () => {
    const newErrors = {};
    FIELDS.forEach(({ key }) => {
      if (!formData[key]?.trim()) {
        const fieldLabel = t.fields[key][lang];
        newErrors[key] = `${t.errorPrefix[lang]} ${fieldLabel.toLowerCase()}`;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onNext();
  };

  return (
    <div>
      <h1 className="delivery-heading">{t.heading[lang]}</h1>
      <div className="delivery-card">
        <div className="form-row">
          {FIELDS.map(({ key, type }) => (
            <div className="field" key={key}>
              <label htmlFor={key}>{t.fields[key][lang]}</label>
              {type === "tel" ? (
                <div className="phone-wrap">
                  <div className="phone-prefix">
                    <span>🇨🇿</span>
                    <span>+420</span>
                  </div>
                  <input
                    id={key}
                    type="tel"
                    value={formData[key]}
                    onChange={set(key)}
                  />
                </div>
              ) : (
                <input
                  id={key}
                  type={type}
                  value={formData[key]}
                  onChange={set(key)}
                />
              )}
              {errors[key] && <p className="error">{errors[key]}</p>}
            </div>
          ))}
        </div>
        <div className="checks">
          <label className="check-row">
            <input
              type="checkbox"
              checked={formData.billing}
              onChange={(e) =>
                setFormData((p) => ({ ...p, billing: e.target.checked }))
              }
            />
            {t.billing[lang]}
          </label>
          <label className="check-row">
            <input
              type="checkbox"
              checked={formData.marketing}
              onChange={(e) =>
                setFormData((p) => ({ ...p, marketing: e.target.checked }))
              }
            />
            {t.marketing[lang]}
          </label>
        </div>
        <p className="terms">
          {t.termsPrefix[lang]}
          <a href="/terms">{t.termsLink[lang]}</a>
        </p>
      </div>
      <div className="btn-row">
        <button onClick={onBack}>{shared.back[lang]}</button>
        <button onClick={handleNext}>{shared.next[lang]}</button>
      </div>
    </div>
  );
}
