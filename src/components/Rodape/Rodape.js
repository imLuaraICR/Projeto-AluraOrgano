import logo from '../../assets/logo.png';
import fb from "../../assets/fb.png";
import tw from "../../assets/tw.png";
import ig from "../../assets/ig.png";

import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className='rodape'>
            <ul>
                <li>
                    <img src={fb} alt='facebook' />
                </li>
                <li>
                    <img src={tw} alt='twitter' />

                </li>
                <li>
                    <img src={ig} alt='instagram' />
                </li>
            </ul>
            <img src={logo} alt="organo" />
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}

export default Rodape;