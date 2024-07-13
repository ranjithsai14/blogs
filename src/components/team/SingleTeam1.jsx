import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleTeam1 = ({ category }) => {
    const { id,activeClass, image_url, slug, name } = category

    return (
        <>
            <div className={`team-style-one ${activeClass}`}>
                <div className="thumb">
                    <img src={image_url} width={800} height={800} alt="Image Not Found" />
                 
                </div>
                <div className="info">
                    
                    <h4><Link href={`/blog-3-column/${slug}?slug=${slug}`} >{name}</Link></h4>

                </div>
            </div>
        </>
    );
};

export default SingleTeam1;