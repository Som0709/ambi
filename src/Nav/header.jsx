import React from "react";
import { Link, Router} from "react-router-dom";
import logo from "../Images/logo.png";
import play_store from "../Images/google-play-logo.png"


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        lists: [{ 
            id: 1, 
            footerMainHeading: "What is LMS?",
            footerAbout:"A learning management system (LMS) is a software application that is used for the online school management, live classes, attendance, online exams, assignments and tracking progress of students/learners for schools and institutes.", } 
        ],

        contactDetail: [{
            id:2,
            play_store_link:"https://play.google.com/store/apps/details?id=com.ambiguousself_learning",
            contactHeading:"Contact us",
            address:" B -30 , Sector-6, Noida 201301, Uttar Pradesh, India ",
            addressLink:"",
            phone:"",
            telephone:"8076063985",
            tell:"01204131753",
            facebook: "https://www.facebook.com/ambilms",
            twitter: "https://twitter.com/AmbiLms",
            linkedIn: "https://www.linkedin.com/company/67915754/",
            instagram:"https://www.instagram.com/ambilms/",
            youtube:"https://www.youtube.com/channel/UCEtT80rCXZihdUaqviC0cKw",
            suppoer_mail:"support@ambilms.com",
            officialMAil:"support@ambilms.com",
            }],
        };
    };

    render() {
    return (
        <>

        <header className="main_menu home_menu menu_fixed animated fadeInDown">
            <div className="ambiLMS_topbar_header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-lg-6 left_cell">
                        {this.state.contactDetail.map(list => ( 
                            <ul className="top-contact">
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <Link to="mailto:som@gmail.com">{list.officialMAil}</Link>
                                </li>
                                <li>
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <Link to="telto:0987654321">{list.tell}</Link>
                                </li>
                            </ul>
                              ))};
                        </div>
                        <div className="col-md-6 col-sm-12 col-lg-6 right_cell">
                            <ul className="topbar_menu">
                            {this.state.contactDetail.map(list => ( 
                                <li>
                                    
                                    <Link target="_blank" to={list.play_store_link} onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}}>
                                        <span className="app_link">
                                            <img src= {play_store} alt=""/>
                                        </span>
                                    </Link>
                                </li>
                                 ))};
                            </ul>
                            <div className="ambi_social">
                                <ul className="social_icons">
                                <div className="header-contact">
                                {this.state.contactDetail.map(list => ( 
                        <div className="social-btns">
                           
                            <Link className="btn linkedin" target="_blank" to={list.linkedIn}>
                                <i className="fa fa-linkedin"></i>
                            </Link>
                            <Link className="btn twitter" target="_blank" to={list.twitter}>
                                <i className="fa fa-twitter"></i>
                            </Link>
                            <Link className="btn facebook" target="_blank" to={list.facebook}>
                                <i className="fa fa-facebook"></i>
                            </Link>
                            <Link className="btn instagram" target="_blank" to={list.instagram}>
                                <i className="fa fa-instagram"></i>
                            </Link>
                            <Link className="btn youtube" target="_blank"
                                to={list.youtube}>
                                <i className="fa fa-youtube-play"></i>
                            </Link>
                        </div>
                          ))}
                    </div>
                                </ul>
                            </div>
                            <div className="ambiLMS_request">
                                <Link className="ambiLMS_btn" to="/" title="">Request a Info</Link>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img className=" lazyloaded" src={logo} alt={logo}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse main-menu-item justify-content-end"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center">
                                <li><Link  aria-current="page" to="./board">Study Material</Link>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li className="sub">
                                                <Link to="./cbse">CBSE</Link>
                                                <ul>
                                                    <li className="sub">
                                                        <Link to="/">English Medium</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/">NCERT Books for
                                                                    className 10</Link>
                                                            </li>
                                                            <li><Link to="/">NCERT Books for
                                                                    className 11</Link></li>
                                                            <li><Link to="/">NCERT Books for
                                                                    className 12</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub">
                                                        <Link to="/">Hindi Medium</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/">NCERT Books for
                                                                    className 10</Link>
                                                            </li>
                                                            <li><Link to="/">NCERT Books for
                                                                    className 11</Link></li>
                                                            <li><Link to="/">NCERT Books for
                                                                    className 12</Link></li>
                                                        </ul>
                                                    </li>

                                                    <li className="sub">
                                                        <Link to="/">RS Aggarwal
                                                            Solutions</Link>
                                                        <ul>
                                                            <li><Link to="/">RS
                                                                    Aggarwal className 9 Solutions</Link></li>
                                                            <li><Link to="/">RS
                                                                    Aggarwal className 10 Solutions</Link></li>
                                                            <li><Link to="/">RS
                                                                    Aggarwal className 11
                                                                    Solutions</Link></li>
                                                            <li><Link to="/">RS
                                                                    Aggarwal className 12
                                                                    Solutions</Link></li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="sub">
                                                <Link to="/">ICSE</Link>
                                                <ul>
                                                    <li><Link to="/">ICSE Sample Papers</Link></li>
                                                    <li><Link to="/">ICSE Question Papers</Link>
                                                    </li>
                                                    <li className="sub">
                                                        <Link to="/">Sample Solutions</Link>
                                                        <ul>
                                                            <li><Link to="/">className 6 </Link></li>
                                                            <li><Link to="/">className 7 </Link></li>
                                                            <li><Link to="/">className 8 </Link></li>
                                                            <li><Link to="/">className 9 </Link></li>
                                                            <li><Link to="/">className 10</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub">
                                                        <Link to="/ml-aggarwal-solutions/">ML Aggarwal Solutions</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/ml-aggarwal-solutions-className-10-maths/">ML
                                                                    Aggarwal Solutions className 10 Maths </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ml-aggarwal-solutions-className-9-maths/">ML
                                                                    Aggarwal Solutions className 9 Maths</Link></li>
                                                            <li>
                                                                <Link to="/ml-aggarwal-solutions-className-8-maths/">ML
                                                                    Aggarwal Solutions className 8 Maths</Link></li>
                                                            <li>
                                                                <Link to="/ml-aggarwal-solutions-className-7-maths/">ML
                                                                    Aggarwal Solutions className 7 Maths</Link></li>
                                                            <li>
                                                                <Link to="/ml-aggarwal-solutions-className-6-maths/">ML
                                                                    Aggarwal Solutions className 6 Maths</Link>
                                                                    </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/">MCQ</Link>
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li className="sub">
                                                <Link to="mcq-board.php">CBSE Board</Link>
                                                <ul>
                                                    <li className="sub">
                                                        <Link to="/">English Medium</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/">MCQ For
                                                                    className 10</Link>
                                                            </li>
                                                            <li><Link to="/">MCQ For
                                                                    className 11</Link></li>
                                                            <li><Link to="/">MCQ For
                                                                    className 12</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub">
                                                        <Link to="/">Hindi Medium</Link>
                                                        <ul>
                                                            <li>
                                                                <Link to="/">MCQ For
                                                                    className 10</Link>
                                                            </li>
                                                            <li><Link to="/">MCQ For
                                                                    className 11</Link></li>
                                                            <li><Link to="/">MCQ For
                                                                    className 12</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub">
                                                <Link to="/">ICSE Board</Link>
                                                <ul>
                                                    <li className="sub">
                                                        <Link to="/">MCQ For
                                                            className 10</Link>
                                                    </li>

                                                    <li><Link to="/">MCQ For
                                                            className 11</Link></li>
                                                    <li><Link to="/">MCQ For
                                                            className 12</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/qna">QNA</Link>
                                </li>
                                
                                <li><Link to="/book">Books </Link>
                                </li>
                                <li><Link to="/contact">Contact Us</Link>
                                </li>
                               
                            </ul>
                        </div>
                    </nav>
                </div>
                </div>
            </div>
        </header>
   
        </>
    );
    };
};
export default Header;