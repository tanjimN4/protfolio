import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='m-10'>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Website Design</a>
                    <a className="link link-hover">Frontend Development</a>
                    <a className="link link-hover">Backend Development</a>
                    <a className="link link-hover">Marn-Stack Development</a>
                    <a className="link link-hover">Full-Stack Development</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <Link className="link link-hover" to='/contact'>Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    
                    <p>
                        DevFolio
                        <br />
                        Providing reliable tech since 2024
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <a target='_blank' href="https://github.com/tanjimN4"><FaGithub className='text-4xl' /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/tanjim-ahemed-chowdhury-436b1932b/"><FaLinkedin className='text-4xl' /></a>
                    <a target='_blank' href="mailto:tanjimahemed7@gmail.com"><IoIosMail className='text-4xl' /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;