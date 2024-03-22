import './style.css';
import { Link } from 'react-router-dom';
import whiteSmileLogo from '../../assets/img/whiteLogo_smile.svg';
import addProdIcon from '../../assets/img/addProd.svg';
import listProdIcon from '../../assets/img/listProd.svg';
import listUsersIcon from '../../assets/img/listUsers.svg';
import logoutIcon from '../../assets/img/logOut.svg';

 
export function MenuDashboard () {
    return (
        <>
             <div className="menu-lateral">
                    <div className="header">
                        <img src={whiteSmileLogo} alt="" />
                    </div>
                    <div className="menu-navBar">
                        <ul>
                            <div className='option'>
                                <div className="icon"><img src={addProdIcon} alt="" /></div>
                                <li>Cadastrar Produto</li>
                            </div>
                            <div className='option'>
                                <div className="icon"><img src={listProdIcon} alt="" /></div>                            
                                <li>Listar Produtos</li>
                            </div>
                            <div className='option'>
                                <div className="icon"><img src={listUsersIcon} alt="" /></div>                              
                                <li>Listar Usuários</li>
                            </div>
                        </ul>
                    </div>
                    <div className="logout">
                        <div className="icon"><img src={logoutIcon} alt="" /></div>
                        <Link>Sair</Link>
                    </div>
                </div>
        </>
    )
}