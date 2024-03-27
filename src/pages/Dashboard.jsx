import { useState } from "react";
import { MenuDashboard } from "../components/Menu-dashboard";
import { TitleDash } from "../components/Title-Dash";
import '../styles/dashboard.css'

export function Dashboard() {

    const initilForm = {
        nome: "",
        preco: "",
        tamanhos: [],
        imagemModelo: "",
        imgProd: []
    }

    const [form, setForm] = useState(initilForm)

    return (
        <>
            <main className="main-dashboard">
                <MenuDashboard />

                <div className="content">
                    <TitleDash title='Cadastrar Produto' />
                    <form action="">
                        <div className="form-control double">
                            <div className="only big">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type='text'
                                    id='nome'
                                    name='nome'
                                />
                            </div>
                            <div className="only small">
                                <label htmlFor="preco">Preço</label>
                                <input
                                    type='text'
                                    id='preco'
                                    name='preco'
                                />
                            </div>
                        </div>
                        <div className="form-control double-add">
                            <div className="taman-component">
                                <label htmlFor="tamanho">Tamanho</label>
                                <input type="text" list="tamanhos" />
                                <datalist id="tamanhos">
                                    <option value="UNICO"></option>
                                    <option value="PP"></option>
                                    <option value="P"></option>
                                    <option value="M"></option>
                                    <option value="G"></option>
                                    <option value="GG"></option>
                                </datalist>
                            </div>

                            <button className="btn-add" id="btn-add">+</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="nome">Imagem Modelo</label>
                            <input
                                type='text'
                                id='img-model'
                                name='img-model'
                            />
                        </div>
                        <div className="form-control double-add">
                            <div className="only first">
                                <label htmlFor="nome">Img Prod</label>
                                <input
                                    type='text'
                                    id='img-prod'
                                    name='img-prod'
                                />
                            </div>
                            <div className="only">
                                <label htmlFor="preco">Img Prod</label>
                                <input
                                    type='text'
                                    id='img-prod'
                                    name='img-prod'
                                />
                            </div>
                            <button className="btn-add">+</button>
                        </div>
                        <button className="btn-main" type="submit">Cadastrar</button>
                    </form>
                </div>
            </main>
        </>
    )
}