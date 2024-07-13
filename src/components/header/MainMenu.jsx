import React from 'react';
import Link from 'next/link';

const MainMenu = ({ navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog-3-column">Blog</Link></li>
                        
                
            </ul>
        </>
    );
};

export default MainMenu;