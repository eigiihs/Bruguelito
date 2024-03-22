import { MenuDashboard } from "../components/Menu-dashboard";
import '../styles/dashboard.css'

export function Dashboard() {
    return (
        <>
            <main className="main-dashboard">
                <MenuDashboard />

                <div className="content">
                    <div className="title-dash">
                        <h1>Cadastrar Produto</h1>
                    </div>
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
                        <div className="form-control">
                            <label htmlFor="tamanho">Tamanho</label>
                            <select className="small" name="" id="">
                                <option value=""></option>
                                <option value="unico">UNICO</option>
                                <option value="pp">PP</option>
                                <option value="p">P</option>
                                <option value="m">M</option>
                                <option value="g">G</option>
                                <option value="gg">GG</option>
                            </select>

                            <button className="btn-add">+</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="nome">Imagem Modelo</label>
                            <input
                                type='text'
                                id='img-model'
                                name='img-model'
                            />
                        </div>
                        <div className="form-control double">
                            <div className="only">
                                <label htmlFor="nome">Img Prod-1</label>
                                <input
                                    type='text'
                                    id='img-model'
                                    name='img-model'
                                />
                            </div>
                            <div className="only">
                                <label htmlFor="preco">Img Prod-2</label>
                                <input
                                    type='text'
                                    id='preco'
                                    name='preco'
                                />
                            </div>

                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}