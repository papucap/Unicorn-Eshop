import { Link } from "react-router-dom";
import "./QR.css";

export default function QR() {
    return (
        <div className="qr-container">

            <button className="qr-button">
                <Link to={"/"}>Zpet</Link>
            </button>

            <img className="qr-img qr1" src="../src/assets/QR.png" alt="QR" />
            <img className="qr-img qr2" src="../src/assets/QR.png" alt="QR" />
            <img className="qr-img qr3" src="../src/assets/QR.png" alt="QR" />
            <img className="qr-img qr4" src="../src/assets/QR.png" alt="QR" />
            <img className="qr-img qr5" src="../src/assets/QR.png" alt="QR" />
            <img className="qr-img qr6" src="../src/assets/QR.png" alt="QR" />

        </div>
    );
}