import './style.css';
import blackNameLogo from '../../assets/img/blackName_logo.svg';
import searchIcon from '../../assets/img/search-icon.svg';
import wichlistIcon from '../../assets/img/wishlist-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import userIcon from '../../assets/img/user-icon.svg';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Suporte</a></li>
            </ul>
        </nav>

        <div className="bruguelitoName-logo">
            <img src={blackNameLogo} alt="" />
        </div>

        <div className="action-menu">
            <div className="searchBar">
                <input type="text" placeholder="Buscar" className="searchInput" />

                <div className="search-icon">
                    <a href=""><img src={searchIcon} alt="" /></a>
                </div>
            </div>

            <div className="options-menu">
                <a href=""><img src={wichlistIcon} alt="" /></a>
                <a href=""><img src={cartIcon} alt="" /></a>
                <Link to="/login"><img src={userIcon} alt="" /></Link>
            </div>
        </div>
    </header>
    )
}