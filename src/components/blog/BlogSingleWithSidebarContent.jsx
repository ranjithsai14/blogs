import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShare from '../utilities/SocialShare';
import BlogPostComments from './BlogPostComments';
import BlogCommentForm from '../form/BlogCommentForm';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchiveWidget from '../widgets/ArchiveWidget';
import FollowWidget from '../widgets/FollowWidget';
import TagsWidget from '../widgets/TagsWidget';
import team2Thumb from '@/assets/img/teams/2.jpg'

const BlogSingleWithSidebarContent = ({ blogInfo }) => {
console.log(blogInfo)
    return (
        <>
            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-style-two item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                             <Link href="#"><img src={blogInfo?.thumbnail_url} alt="Thumb" width={1900} height={995} /></Link>
                                        </div>
                                        <div className="info">
                                            <div className="meta">
                                                <ul>
                                                  
                                                    <li>
                                                        <Link href="#"> {blogInfo?.author}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                          <p dangerouslySetInnerHTML={{ __html: blogInfo?.short_description }}>
                                            
                                            
                                          </p>
                                          <p dangerouslySetInnerHTML={{ __html: blogInfo?.description }}>
                                          
                                          </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="post-author">
                                    <div className="thumb">
                                        <Image src={team2Thumb} alt="Thumb" width={1900} height={995} />
                                    </div>
                                    <div className="info">
                                        <h4><a href="#">Md Sohag</a></h4>
                                        <p>
                                            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend. Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="post-tags share">
                                    <div className="tags">
                                        <h4>Tags: </h4>
                                        <a href="#">Algorithm</a>
                                        <a href="$">Data science</a>
                                    </div>

                                    <div className="social">
                                        <h4>Share:</h4>
                                        <ul>
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div> */}
                                {/* <div className="post-pagi-area">
                                    <div className="post-previous">
                                        <Link href="#">
                                            <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                            <div className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                                        </Link>
                                    </div>
                                    <div className="post-next">
                                        <Link href="#">
                                            <div className="nav-title">Next Post <h5>Discovery incommode</h5></div>
                                            <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                        </Link>
                                    </div>
                                </div> */}
                                {/* <div className="blog-comments">
                                    <div className="comments-area">
                                        <div className="comments-title">
                                            <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                            <BlogPostComments />
                                        </div>
                                        <div className="comments-form">
                                            <div className="title">
                                                <h3>Leave a comments</h3>
                                            </div>
                                            <BlogCommentForm />
                                        </div>
                                    </div>
                                </div> */}
                            </div>


                            {/* <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleWithSidebarContent;