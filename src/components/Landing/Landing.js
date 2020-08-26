import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

const Landing = () => {
    return (
        <div className='landing'>
            <div className="landing__content">
                <h1 className="landing__title">
                    Front End React Developer
                </h1>

                <p className="landing__subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, sapiente saepe excepturi pariatur quae impedit?
                </p>

                <Link
                    to='projects'
                    spy={true}
                    smooth={true}
                    duration={700}
                    delay={200}
                    className='landing__btn'
                >
                    View My Work
                </Link>

                <FaArrowRight className='landing__icon' />
            </div>
        </div>
    );
};

export default Landing;