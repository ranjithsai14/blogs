import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlog3Column = ({ blog }) => {

    // const { id,thumbnail_url,thumbnail ,thumb, date, author, authorIcon, title, btnIcon, btnText } = blog

    return (

        <>


            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`/blog-single-with-sidebar/${blog.id}?slug=${blog.slug}`}>
                        <img src={blog.thumbnail_url} width={800} height={600} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                  
                    <h4>
                        <Link href={`/blog-single-with-sidebar/${blog.id}?slug=${blog.slug}`}>{blog.title}</Link>
                    </h4>
                    <Link href={`/blog-single-with-sidebar/${blog.id}?slug=${blog.slug}`} className="btn-simple">{blog.author}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;