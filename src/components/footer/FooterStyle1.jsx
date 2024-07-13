import Image from 'next/image';
import React from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo-light.png';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
    return (
        <>
            <footer className="bg-dark text-light"><div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved. </p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link href="/faq">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;