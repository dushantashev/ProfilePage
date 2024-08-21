import { Link } from 'react-scroll';

export default function Link() {
    return (
        <nav className="...">
            <Link
                to="about"
                smooth={true}
                duration={500}
                className="menu-item ..."
            >
                About
            </Link>
        </nav>
    );
}
