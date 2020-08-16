import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../images/logo.svg';
import Brand from '../../images/brand.svg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__nav">
                <div className="navbar__logo">
                    <img 
                        src={Logo} 
                        alt='Navbar Logo'
                        className='navbar__logo-svgLogo' 
                    />

                    <img
                        src={Brand}
                        alt='Navbar Brand'
                        className='navbar__logo-svgBrand'
                    />
                </div>

                <div className="navbar__spacer" />

                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link 
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={700}
                            delay={200}
                            className='navbar__link'
                        >
                            Projects
                        </Link>
                    </li>

                    <li className="navbar__item">
                        <Link 
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={700}
                            delay={200}
                            className='navbar__link'
                        >
                            About
                        </Link>
                    </li>

                    <li className="navbar__item">
                        <Link 
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={700}
                            delay={200}
                            className='navbar__link'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;