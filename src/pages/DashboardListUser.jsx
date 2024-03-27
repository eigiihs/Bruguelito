import '../styles/dashboard.css'
import { MenuDashboard } from "../components/Menu-dashboard";
import { TitleDash } from "../components/Title-Dash";

export function DashboardListUser () {
    return (
        <>
           <main className="main-dashboard">
                <MenuDashboard />
                
                <div className="content">
                    <TitleDash title='Listar Usuários' />
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>E-mail</th>
                            <th>Senha</th>
                            <th>Data de Nascimento</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>giihsousa@gmail.com</td>
                            <td>gigi1234</td>
                            <td>19-07-2006</td>
                        </tr>
                    </table>
                </div>
            </main> 
        </>
    )
}