import './style.css';
import blackNameLogo from '../../assets/img/blackName_logo.svg';
import searchIcon from '../../assets/img/search-icon.svg';
import wichlistIcon from '../../assets/img/wishlist-icon.svg';
import cartIcon from '../../assets/img/cart-icon.svg';
import userIcon from '../../assets/img/user-icon.svg';

export function Header() {
    return(
        <header>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Suporte</a></li>
            </ul>
        </nav>

        <div class="bruguelitoName-logo">
            <img src={blackNameLogo} alt="" />
        </div>

        <div class="action-menu">
            <div class="searchBar">
                <input type="text" placeholder="Buscar" class="searchInput" />

                <div class="search-icon">
                    <a href=""><img src={searchIcon} alt="" /></a>
                </div>
            </div>

            <div class="options-menu">
                <a href=""><img src={wichlistIcon} alt="" /></a>
                <a href=""><img src={cartIcon} alt="" /></a>
                <a href=""><img src={userIcon} alt="" /></a>
            </div>
        </div>
    </header>
    )
}