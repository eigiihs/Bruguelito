import '../styles/dashboard.css';
import { MenuDashboard } from '../components/Menu-dashboard';
import { TitleDash } from '../components/Title-Dash';
import deleteIcon from '../assets/img/delete-icon.svg';
import { products } from '../../db.json';

export function DashboardListProduct() {

    console.log(products.map((item, index) => {
        item.id, item.nome, item.preco
    }))

    return (
        <>
            <main className="main-dashboard">
                <MenuDashboard />

                <div className="content">
                    <TitleDash title='Listar Produtos' />
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Tamanhos</th>
                                <th><img className='icon' src={deleteIcon} alt="" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.nome}</td>
                                        <td>{product.preco}</td>
                                        <td>{product.tamanhos}</td>
                                        <td><button className='btn-del'>Deletar</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}