import React from 'react';
import Logo from '../assets/images/more/logo1.png';
import footerbg from '../assets/images/more/footerBG.jpg';
import { EqualApproximatelyIcon, Facebook, Instagram, LocateOffIcon, LocationEdit, LocationEditIcon, Phone, Twitch, Twitter } from 'lucide-react';
const Footer = () => {
    return (
        <footer

            style={{
                backgroundImage: `url(${footerbg})`,
                backgroundColor: 'lightgray',
                backgroundPosition: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }}
            className="footer sm:footer-horizontal items-center justify-around  p-10 mt-10 ">
            <div>
                <img className="h-[50px]" src={Logo} alt="Logo" />
                <h2 className='text-3xl py-3 text-[#331A15] text-shadow-2xs'>Espresso Emporium</h2>
                <p className='text-black'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>


                <div className="grid grid-flow-col gap-4">
                    <a className='bg-black text-white px-2 py-2 rounded-full'>
                        <Facebook></Facebook>
                    </a>
                    <a className='bg-black text-white px-2 py-2 rounded-full'>
                        <Instagram></Instagram>
                    </a>
                    <a className='bg-black text-white px-2 py-2 rounded-full'>
                        <Twitter></Twitter>
                    </a>
                </div>


                <div>
                    <h2 className='text-3xl py-5 text-[#331A15] text-shadow-2xs'>Get in Touch</h2>
                    <p className='flex items-center gap-3 text-xl py-2'><span ><Phone size={18}></Phone></span> <span>+88 01533 333 333</span></p>

                    <p className='flex items-center gap-3 text-xl'><span ><LocationEdit size={18}></LocationEdit></span> <span>Dhaka Mirpur-1</span></p>
                </div>

            </div>

            {/* section 2 */}
            <div>



                <h2 className='text-3xl py-3 text-[#331A15] text-shadow-2xs'>Connect with Us</h2>
                <div className="card">
                    <div className="">
                        <fieldset className="fieldset">
                            <input type="text" className="input w-[503px]" placeholder="Name" />
                            <input type="email" className="input w-[503px]" placeholder="Email" />
                            <textarea rows={5} cols={5} type="text" className='bg-white py-2 px-2 text-[15px]'  placeholder="Message" />
                        </fieldset>
                            <button className="rounded-full border-[1px] py-2 px-2  mt-4">Send Message</button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;