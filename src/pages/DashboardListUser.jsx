import '../styles/dashboard.css'
import { MenuDashboard } from "../components/Menu-dashboard";
import { TitleDash } from "../components/Title-Dash";
import { users } from '../../db.json';

export function DashboardListUser() {
    return (
        <>
            <main className="main-dashboard">
                <MenuDashboard />

                <div className="content">
                    <TitleDash title='Listar Usuários' />
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>E-mail</th>
                                <th>Senha</th>
                                <th>Data de Nascimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.senha}</td>
                                        <td>{user.dataNasci}</td>
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