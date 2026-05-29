import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./ContactCart.css";
import { cartTranslations } from "../cartTranslations";

export default function ContactCart({ lang = "cs" }) {
  const t = cartTranslations.contactCart;

  return (
    <div className="contact-cart">
      <h1>{t.title[lang]}</h1>
      <p>{t.subtitle[lang]}</p>

      <ul>
        <li>
          <PhoneIcon />
          <a href="tel:773338393">773338393</a>
        </li>
        <li>
          <ChatBubbleIcon />
          <a href="#">{t.chat[lang]}</a>
        </li>
        <li>
          <EmailIcon />
          <a href="mailto:help@footshop.cz">help@footshop.cz</a>
        </li>
      </ul>
    </div>
  );
}
