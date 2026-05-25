import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import "./ContactCart.css";

export default function ContactCart() {
  return (
    <div className="contact-cart">
      <h1>Nevíš si s něčím rady?</h1>
      <p>Rádi ti poradíme. Po–Pá 8:00–18:00.</p>

      <ul>
        <li>
          <PhoneIcon />
          <a href="tel:773338393">773338393</a>
        </li>
        <li>
          <ChatBubbleIcon />
          <a href="#">Online chat</a>
        </li>
        <li>
          <EmailIcon />
          <a href="mailto:help@footshop.cz">help@footshop.cz</a>
        </li>
      </ul>
    </div>
  );
}