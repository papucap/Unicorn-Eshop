import { Link } from "react-router-dom";


export default function QR() {
    return(
        <>
        <button><Link to={"/"}>Zpet</Link></button>
        <img src="../src/assets/QR.png"></img>
        </>
    )
}