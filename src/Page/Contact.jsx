import React from 'react';
import { FaDiscord, FaFacebookMessenger, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import image from '../assets/Screenshot 2024-10-13 000304.png'
const Contact = () => {
    const location = useLocation()
    return (
        <div>
            {
                location.pathname === '/contact' ?
                    <div className='mx-10'>
                        <div className="flex items-center bg-gray-100 py-14 rounded-lg shadow-md w-full  mx-auto">
                            <div className="w-1/2 flex justify-center">
                                <img src={image} alt="Animated character with glasses and a laptop" className="w-24 h-24 rounded-full" />
                            </div>
                            <div className="w-1/2 border-l-2 border-gray-300 pl-6">
                                <h1 className="text-2xl font-bold font-nunito">Tanjim</h1>
                                <p className='p-2 text-lg'>Feel free to reach out for any inquiries or collaboration opportunities. You can contact me via email at <a className='text-blue-400' href="mailto:tanjimahemed7@gmail.com">tanjimahemed7@gamil.com</a>, or connect with me on <a className='text-blue-600' href="">Whats App</a>. I am available for project discussions, consultations, and any other messages you might have.</p>
                            </div>
                        </div>
                    </div> :
                    <div>
                        <div className="flex justify-center items-center mx-10 bg-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border p-4 flex flex-col items-center">
                                        <FaWhatsapp className='text-green-500 text-4xl' />
                                        <p>Message on WhatsApp</p>
                                        <a href="tel:+8801975886500" className="text-blue-500">+8801975886500</a>
                                    </div>
                                    <div className="border p-4 flex flex-col items-center">
                                        <FaTelegramPlane className='text-4xl text-blue-500' />
                                        <p>Message on Telegram</p>
                                        <a href="tel:+8801975886500" className="text-blue-500">+8801975886500</a>
                                    </div>
                                    <div className="border p-4 flex flex-col items-center">
                                        <FaFacebookMessenger className='text-4xl text-blue-500' />
                                        <p>Message on Messenger</p>
                                        <a href="#" className="text-blue-500">Messenger Link</a>
                                    </div>
                                    <div className="border p-4 flex flex-col items-center">
                                        <FaDiscord className='text-4xl text-blue-500' />
                                        <p>Message on Discord</p>
                                        <a href="#" className="text-blue-500">Tanjim</a>
                                    </div>
                                </div>
                                <div className="border p-4">
                                    <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
                                    <form className="space-y-4">
                                        <div className="flex items-center border p-2 rounded">
                                            <i className="fas fa-user mr-2"></i>
                                            <input type="text" placeholder="Your Name" className="w-full outline-none" />
                                        </div>
                                        <div className="flex items-center border p-2 rounded">
                                            <i className="fas fa-envelope mr-2"></i>
                                            <input type="email" placeholder="Your Email" className="w-full outline-none" />
                                        </div>
                                        <div className="flex items-center border p-2 rounded">
                                            <i className="fas fa-phone mr-2"></i>
                                            <input type="tel" placeholder="Your Phone" className="w-full outline-none" />
                                        </div>
                                        <div className="flex items-center border p-2 rounded">
                                            <i className="fas fa-comment mr-2"></i>
                                            <textarea placeholder="Your Message" className="w-full outline-none"></textarea>
                                        </div>
                                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center">
                                            Send Message <i className="fas fa-paper-plane ml-2"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Contact;