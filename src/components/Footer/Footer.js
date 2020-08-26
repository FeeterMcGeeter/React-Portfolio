import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowCircleUp, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../../images/logo.svg';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='footer'>
            <div className='footer__btn-toTop' onClick={scrollToTop}>
                <FaArrowCircleUp className='icon-arrow-up' />
            </div>

            <div className='footer__logo'>
                <img
                    src={Logo}
                    alt='Navbar Logo'
                    className='navbar__logo-svgLogo'
                />
            </div>

            <ul className='footer__list'>
                <li className='footer__items'>
                    <a
                        href='!#'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footer__link'
                    >
                        <FaFacebookF className='footer__icon' />
                    </a>
                </li>
                <li className='footer__items'>
                    <a
                        href='!#'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footer__link'
                    >
                        <FaGithub className='footer__icon' />
                    </a>
                </li>
                <li className='footer__items'>
                    <a
                        href='!#'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footer__link'
                    >
                        <FaLinkedinIn className='footer__icon' />
                    </a>
                </li>
            </ul>

            <p className='footer__copyright'>
                created by
                <span>Jeffrey Davis</span>
                &copy; 2020
            </p>
        </div>
    );
};

export default Footer;
