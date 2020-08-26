import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='projects'>
            <h1 className='heading--1'>Projects</h1>

            <div className='projects__cards-container'>
                <div className='projects__card'>
                    <p className='heading-2'>
                        Customer Portfolio
                    </p>

                    <div className="projects__card-links">
                        <a 
                            href='https://www.davismrach.com/'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Link
                        </a>

                        <a 
                            href='https://github.com/FeeterMcGeeter/rachel-react-portfolio'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub 
                                className='projects__card-icon'
                            />
                        </a>
                    </div>
                </div>
                <div className='projects__card'>
                    <p className='heading-2'>
                        Google Books
                    </p>

                    <div className="projects__card-links">
                        <a 
                            href='https://sleepy-atoll-56141.herokuapp.com/'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Link
                        </a>

                        <a 
                            href='https://github.com/FeeterMcGeeter/Google-Books'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub 
                                className='projects__card-icon'
                            />
                        </a>
                    </div>
                </div>
                <div className='projects__card'>
                    <p className='heading-2'>
                        Burger App
                    </p>

                    <div className="projects__card-links">
                        <a 
                            href='https://infinite-depths-23305.herokuapp.com/'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Link
                        </a>

                        <a 
                            href='https://github.com/FeeterMcGeeter/Burger-App'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub 
                                className='projects__card-icon'
                            />
                        </a>
                    </div>
                </div>
                <div className='projects__card'>
                    <p className='heading-2'>
                        My Portfolio
                    </p>

                    <div className="projects__card-links">
                        <a 
                            href='!#'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Link
                        </a>

                        <a 
                            href='https://github.com/FeeterMcGeeter/react-portfolio'
                            className='projects__card-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub 
                                className='projects__card-icon'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
