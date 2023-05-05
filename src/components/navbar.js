import LogoSight from '../assets/Logo.png';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center px-10 py-5 bg-gray-800 text-white text-lg font-bold fixed w-full">
            <div>
                <img src={LogoSight} alt="Logo" className="h-14" />
            </div>
            <ul className="flex flex-row gap-5">
                <li><Link to="Pancreatic">Pancreatic cancer</Link></li>
                <li><Link to="Liver">Liver cancer</Link></li>
                <li><Link to="Ovarian">Ovarian cancer</Link></li>
                <li><Link to="Lung">Lung cancer</Link></li>
                <li><Link to="Brain">Brain cancer</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
