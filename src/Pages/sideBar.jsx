import React from "react";
import banner_images from "../Images/banner.jpg";

const SideBard = () => {
    return (
        <>
            <div className="ambi_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <div className="side_heading">
                        <h4 className="widget_title">Search</h4>
                    </div>
                    <form action="/" method="get">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" name="s" id="search" value="" className="form-control" placeholder="Search Posts" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'"/>
                                <input type="hidden" value="post" name="post_type" id="post_type"/>
                            </div>
                        </div>
                        <button className="button rounded-0 primary-bg text-white w-100 btn_1" type="submit">Search</button>
                    </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                    <div className="side_heading">
                        <h4 className="widget_title">Board List</h4>
                    </div>
                    <div className="ambiLMS_board ">
                        <input className="ambi_input" id="cbse" name="cbse" type="checkbox"/>
                        <label className="ac-label board_name" for="cbse">CBSE Board</label>
                        <article className="ambi_text">
                            <div className="ambi_class">
                                <input className="ambi_input" id="c_one" name="c_one" type="checkbox"/>
                                <label className="ambi_class_name" for="c_one">Class 1st</label>
                                <article className="sub_list">
                                    <ul>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Maths</li>
                                    </ul>
                                </article>
                            </div>
                            <div className="ambi_class">
                                <input className="ambi_input" id="c_fifth" name="c_fifth" type="checkbox"/>
                                <label className="ambi_class_name" for="c_fifth">Class 5th</label>
                                <article className="sub_list">
                                    <ul>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Maths</li>
                                    </ul>
                                </article>
                            </div>
                        </article>
                          
                        <input className="ambi_input" id="icse" name="icse" type="checkbox"/>
                        <label className="ac-label board_name" for="icse">ICSE Board</label>
                        <article className="ambi_text">
                            <div className="ambi_class">
                                <input className="ambi_input" id="i_one" name="i_one" type="checkbox"/>
                                <label className="ambi_class_name" for="i_one">Class 1st</label>
                                <article className="sub_list">
                                    <ul>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Maths</li>
                                    </ul>
                                </article>
                            </div>
                            <div className="ambi_class">
                      
                            <input className="ambi_input" id="i_fifth" name="i_fifth" type="checkbox"/>
                                <label className="ambi_class_name" for="i_fifth">Class 5th</label>
                                <article className="sub_list">
                                    <ul>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Maths</li>
                                    </ul>
                                </article>
                            </div>
                        </article>
                        <input className="ambi_input" id="up" name="up" type="checkbox"/>
                        <label className="ac-label board_name" for="up">UP Board</label>
                        <article className="ambi_text">
                            <div className="ambi_class">
                                <input className="ambi_input" id="up_one" name="up_one" type="checkbox"/>
                                <label className="ambi_class_name" for="up_one">Class 1st</label>
                                <article className="sub_list">
                                    <ul>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Maths</li>
                                    </ul>
                                </article>
                            </div>
                            <div className="ambi_class">
                                <input className="ambi_input" id="up_fifth" name="up_fifth" type="checkbox"/>
                                <label className="ambi_class_name" for="up_fifth">Class 5th</label>
                                <article className="sub_list">
                                    <ul>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Maths</li>
                                    </ul>
                                </article>
                            </div>
                        </article>
                    </div>
                </aside>
                <aside className="single_sidebar_widget latest_news">
                    <div className="side_heading">
                        <h4 className="widget_title">Latest News</h4>
                    </div>
                    <div className="ambiLMS_latest_n">
                        <div className="latest_n clearfix">
                            <div className="news_list">
                                <a>
                                    <img width="65" height="65" src="https://universe.esmet.me/wp-content/uploads/sites/6/2014/03/gallery5-65x65.jpg" className="news_thumb"/>
                                </a>
                            </div>
                            <div className="news_details">
                                <h5 className="news=_list_title"> <a href="#">What
                                             you have to know about MBA</a>
                                </h5>
                                <div className="news_list_meta small-text">         
                                    <span>Jan 12, 2021</span> With 
                                    <span><a href="#">No
                                                 Comments</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                  
                        <div className="latest_n clearfix">
                            <div className="news_list">
                                <a>
                                    <img width="65" height="65" src="https://universe.esmet.me/wp-content/uploads/sites/6/2014/03/gallery5-65x65.jpg" className="news_thumb"/>
                                </a>
                            </div>
                            <div className="news_details">
                                <h5 className="news=_list_title"> <a href="#">What
                                             you have to know about MBA</a>
                                </h5>
                                <div className="news_list_meta small-text"> 
                                
                                    <span>Jan 12, 2021</span> With 
                                    <span><a href="#">No
                                                 Comments</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="latest_n clearfix">
                            <div className="news_list">
                                <a>
                                    <img width="65" height="65" src="https://universe.esmet.me/wp-content/uploads/sites/6/2014/03/gallery5-65x65.jpg" className="news_thumb"/>
                                </a>
                            </div>
                            <div className="news_details">
                                <h5 className="news=_list_title"> <a href="#">What
                                             you have to know about MBA</a>
                                </h5>
                                <div className="news_list_meta small-text"> <span>Jan 12, 2021</span> With 
                                <span><a href="#">No
                                                 Comments</a>
                                </span>
                            </div>
                        </div>
                    </div>     
                </div>
            </aside>
        </div>
        </>
    );
};
export default SideBard;
