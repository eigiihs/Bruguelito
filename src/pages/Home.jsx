import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import banner from '../assets/img/banner.svg';
import '../styles/home.css';

export function Home () {

    return (
        <>
            <Header/>

            <section className="banner">
                <img src={banner} alt="" />
            </section>

            <Footer/>
        </>
    )
}