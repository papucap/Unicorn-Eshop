import { Link } from "react-router-dom";


export default function QR() {
    return(
        <>
        <button><Link to={"/"}>Zpet</Link></button>
        <img src="../../public/QR.png"></img>
        </>
    )
}