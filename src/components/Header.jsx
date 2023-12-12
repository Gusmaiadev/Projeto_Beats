import './Header.css'
import Logo from '../assets/logo_beats.png';
import User from '../assets/icone_user.png';
import Globo from '../assets/icon_globo.png';

function Header(){

    return(

        <header className='header'>
            <div className='logo'>
                <img className='logo_header' src={Logo} alt="Logo Beats" />
            </div>

            <nav className='menu_nav'>
                <ul>
                    <li>INICIO</li>
                    <li>FONES</li>
                    <li>BEATS STUDIO PRO</li>
                    <li>CONTATO</li>
                </ul>
            </nav>

            <div className='user_search'>
                <img className='icone_header' src={User} alt="Icone usuário" />
                <img className='icone_header' src={Globo} alt="Icone globo" />
            </div>

           
        </header>
   )
}

export default Header