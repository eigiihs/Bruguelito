import './style.css';
import blackNameLogo from '../../assets/img/blackName_logo.svg';
import searchIcon from '../../assets/img/search-icon.svg';
import wichlistIcon from '../../assets/img/wishlist-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import userIcon from '../../assets/img/user-icon.svg';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';

export function Header() {

    function scrollFooter() {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    }

    return(
        <header>
        <nav>
            <ul>
                <li id='home'><Link to="/">Home</Link></li>
                <li><Link>Shop</Link></li>
                <li id='support'><Link onClick={scrollFooter}>Suporte</Link></li>
            </ul>
        </nav>

        <div className="bruguelitoName-logo">
            <img src={blackNameLogo} alt="" />
        </div>

        <div className="action-menu">
            <div className="searchBar">
                <input type="text" placeholder="Buscar" className="searchInput" />

                <div className="search-icon">
                    <Link><img src={searchIcon} alt="" /></Link>
                </div>
            </div>

            <div className="options-menu">
                <Link><img src={wichlistIcon} alt="" /></Link>
                <Link><img src={cartIcon} alt="" /></Link>  
                <Link to="/login"><img src={userIcon} alt="" id='icon-user'/></Link>
            </div>
        </div>
    </header>
    )
}