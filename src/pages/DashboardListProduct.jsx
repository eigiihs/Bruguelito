import '../styles/dashboard.css'
import { MenuDashboard } from '../components/Menu-dashboard'
import { TitleDash } from '../components/Title-Dash'
import deleteIcon from  '../assets/img/delete-icon.svg'
import editIcon from '../assets/img/edit-icon.svg'

export function DashboardListProduct () {
    return (
        <>
            <main className="main-dashboard">
                <MenuDashboard />

                <div className="content">
                    <TitleDash title='Listar Produtos' />
                    <table>
                    <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Tamanhos</th>
                            <th><img className='icon' src={deleteIcon} alt="" /></th>
                            <th><img className='icon' src={editIcon} alt="" /></th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>NY Female Green Hat</td>
                            <td>129,99</td>
                            <td>Único</td>
                            <td><button className='btn-del'>Deletar</button></td>
                            <td><button className='btn-edit'>Editar</button></td>
                        </tr>
                    </table>
                </div>
            </main>
        </>
    )
}