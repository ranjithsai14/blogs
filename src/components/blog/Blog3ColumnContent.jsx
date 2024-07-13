import React from 'react';
// import blogData from '@/assets/jsonData/blog/BlogData.json'
import SingleBlog3Column from './SingleBlog3Column';

const Blog3ColumnContent = ({blogData}) => {
    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {blogData?.map(blog =>
                                <div className="col-xl-4 col-md-6 single-item" key={blog.id}>
                                    <SingleBlog3Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;