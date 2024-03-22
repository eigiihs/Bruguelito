import './style.css';
import whiteSmileLogo from '../../assets/img/whiteLogo_smile.svg';
import instagramIcon from '../../assets/img/instagram_icon.svg';
import facebookIcon from '../../assets/img/facebook_icon.svg';
import tiktokIcon from '../../assets/img/tiktok_icon.svg';
import mastercard from '../../assets/img/mastercard.svg';
import visa from '../../assets/img/visa.svg';
import elo from '../../assets/img/elo.svg';
import pix from '../../assets/img/pix.svg';

export function Footer() {
    return (
        <footer>
            <div class="footer-header-logo">
                <img src={whiteSmileLogo} alt="" />
            </div>

            <div class="footer-information-container">
                <div class="footer-information-support">
                    <h2>Suporte</h2>

                    <span className='line'></span>

                    <div class="support-items">
                        <ul class="support-column">
                            <li><a href="">Atendimento ao cliente</a></li>
                            <li><a href="">Dúvidas Frequentes</a></li>
                            <li><a href="">Trocas e Devoluções</a></li>
                        </ul>

                        <ul class="support-column">
                            <li><a href="">Formas de Pagamento</a></li>
                            <li><a href="">Entregas e Frete</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-information-payment-media">
                    <div class="footer-details-media">
                        <h2>Redes Sociais</h2>

                        <span className='line'></span>

                        <img src={instagramIcon} alt="Nosso Instagram" />
                        <img src={facebookIcon} alt="Nosso Facebook" />
                        <img src={tiktokIcon} alt="Nosso Tiktok" />
                    </div>

                    <div class="footer-details-payment">
                        <img src={mastercard} alt="Bandeira Mastercard" />
                        <img src={visa} alt="Bandeira Visa" />
                        <img src={elo} alt="Bandeira Elo" />
                        <img src={pix} alt="Pix" />
                    </div>
                </div>

            </div>

            <div class="footer-more-contact">
                <p>CNPJ: 12.345.678/0001-00. Fale Conosco: bruguelitostore@gmail.com | (11) 99808-8401</p>
            </div>
        </footer>
    )
}