import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import banner from '../assets/img/banner.svg';
import freteIcon from '../assets/img/frete-icon.svg';
import cardIcon from '../assets/img/card-icon.svg';
import discountIcon from '../assets/img/discount-icon.svg';
import { products } from '../../db.json';
import '../styles/home.css';
import { Link } from "react-router-dom";

export function Home() {

    return (
        <>
            <Header />

            <section className="banner">
                <img src={banner} alt="" />
            </section>

            <section className="benefis">
                <div className="cd-b">
                    <img src={freteIcon} alt="" />
                    <h1>FRETE GRÁTIS</h1>
                    <p>Compras acima de R$230,00</p>
                </div>
                <div className="cd-b">
                    <img src={discountIcon} alt="" />
                    <h1>DESCONTO</h1>
                    <p>10% de desconto na primeira compra</p>
                </div>
                <div className="cd-b">
                    <img src={cardIcon} alt="" />
                    <h1>PARCELAMENTO</h1>
                    <p>Em até 3x sem juros</p>
                </div>
            </section>

            <div className="divider"></div>

            <section className="productsList">
                <div className="prod-title">
                    <h1>LANÇAMENTOS</h1>
                </div>
                <div className="cards">
                    {products.map((product, index) => {
                        return (
                            <div className="card" key={index}>
                                <Link to={`/product/${product.id}`}><img src={product.imgModelo} alt="" /></Link>
                                <h3>{product.nome}</h3>
                                <h2>{product.preco}</h2>
                            </div>
                        )
                    })}
                </div>
            </section>

            <Footer />
        </>
    )
}