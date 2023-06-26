import {Link} from "react-router-dom"

export default function About(){
    return(
        <main>
            <h1>Tentang Kami</h1>
            <p>
                IntegerStore adalah sebuah e-commerce yang menjual berbagai produk Apple
            </p>
            <Link to="/">Kembali ke Home</Link>
        </main>
    );
}