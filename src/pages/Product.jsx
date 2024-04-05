import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import '../styles/product.css'

export function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Erro ao carregar dados do produto: ', error))
    }, [id])

    console.log(product)

    return (
        <>
            <Header />

            <section className="product-details">
                <div className="images">
                    <div className="product-detailsImg">
                        {product.imgsProd && product.imgsProd.map((image, index) => {
                            return (
                                <div className="d-img" key={index}>
                                    <img src={image} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="product-mainImg">
                        <img src={product.imgModelo} alt="" />
                    </div>
                </div>
                <div className="information-product">
                    <h1>{product.nome}</h1>
                    <h2>{product.preco}</h2>

                    <h3>Tamanhos:</h3>

                    <div className="tamanhos">
                        {product.tamanhos && product.tamanhos.map((size, index) => {
                            return (
                                <div className="size" key={index}>
                                    <p>{size}</p>
                                </div>
                            )
                        })}
                    </div>

                    <button className="btn-main add-cart">Adiconar ao carrinho</button>
                </div>
            </section>

            <Footer />
        </>
    )
}