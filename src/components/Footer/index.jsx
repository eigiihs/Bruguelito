import './style.css';
import whiteSmileLogo from '../../assets/img/whiteLogo_smile.svg';
import instagramIcon from '../../assets/img/instagram_icon.svg';
import facebookIcon from '../../assets/img/facebook_icon.svg';
import tiktokIcon from '../../assets/img/tiktok_icon.svg';
import mastercard from '../../assets/img/mastercard.svg';
import visa from '../../assets/img/visa.svg';
import elo from '../../assets/img/elo.svg';
import pix from '../../assets/img/pix.svg';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer>
            <div className="footer-header-logo">
                <img src={whiteSmileLogo} alt="" />
            </div>

            <div className="footer-information-container">
                <div className="footer-information-support">
                    <h2>Suporte</h2>

                    <span className='line'></span>

                    <div className="support-items">
                        <ul className="support-column">
                            <li><Link>Atendimento ao cliente</Link></li>
                            <li><Link>Dúvidas Frequentes</Link></li>
                            <li><Link>Trocas e Devoluções</Link></li>
                        </ul>

                        <ul className="support-column">
                            <li><Link>Formas de Pagamento</Link></li>
                            <li><Link>Entregas e Frete</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-information-payment-media">
                    <div className="footer-details-media">
                        <h2>Redes Sociais</h2>

                        <span className='line'></span>

                        <Link><img src={instagramIcon} alt="Nosso Instagram" /></Link>
                        <Link><img src={facebookIcon} alt="Nosso Facebook" /></Link>
                        <Link><img src={tiktokIcon} alt="Nosso Tiktok" /></Link>  
                    </div>

                    <div className="footer-details-payment">
                        <img src={mastercard} alt="Bandeira Mastercard" />
                        <img src={visa} alt="Bandeira Visa" />
                        <img src={elo} alt="Bandeira Elo" />
                        <img src={pix} alt="Pix" />
                    </div>
                </div>

            </div>

            <div className="footer-more-contact">
                <p>CNPJ: 12.345.678/0001-00. Fale Conosco: bruguelitostore@gmail.com | (11) 99808-8401</p>
            </div>
        </footer>
    )
}