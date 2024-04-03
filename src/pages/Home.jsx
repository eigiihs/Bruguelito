import { useState, useEffect, useRef } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { motion } from "framer-motion"; 
import { products } from '../../db.json';
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