import React from "react";
import footer_bg from "../Images/footer-pattern.png";
import {Link, NavLink} from "react-router-dom";
import ContactDATA from "../Data/contactINFO";
class  Footer  extends React.Component {
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
            contactHeading:"Contact us",
            address:" B -30 , Sector-6, Noida 201301, Uttar Pradesh, India ",
            addressLink:"",
            phone:"",
            telephone:"",
            tell:"",
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
            <footer className="ambiLMS_footer_area">
                <div className="ambi_f_bg">
                    <img src={footer_bg} alt={footer_bg}/>
                </div>
    <div className="container">
        <div className="row justify-content-between mb-5 pd-5">
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="ambi_f_widget ambi_brand">  
                {this.state.lists.map(list => ( 
                    <div>
                        <h4>{list.footerMainHeading}</h4>
                        <p>{list.footerAbout}</p>
                    </div>
                ))};
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-2">
                <div className="ambi_f_widget menu">
                    <h4><b>Our Menu </b></h4>
                    <div className="ambi_f_menu">
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="#">UP Board</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">CBSE Board</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Short Notes</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">MCQ</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">QNA</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Study Material</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-2">
                <div className="ambi_f_widget help">
                    <h4><b>Our Help Desk</b></h4>
                    <div className="ambi_f_menu">
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="#">FAQs</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="menu-item">
                                <a target="_blank" href="https://www.ambiguousit.com/terms-of-use/">Terms &amp;
                                    Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-md-4">
            {this.state.contactDetail.map(list => ( 
                <div className="ambi_f_widget address">
                    <h4><b>{list.contactHeading}</b></h4>
                    <div className="ambi_f_menu">
                        <p><span> Address :</span> {list.address}</p>
                        <p><span> Phone :</span> {list.phone}</p>
                        <p><span> Email : </span>{list.suppoer_mail}</p>
                    </div>
                    <div className="header-contact">
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
                    </div>
                </div>
                  ))};
            </div>
        </div>
    </div>
    <div className="copy_right">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ambiLMS_copyright text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="ambi_f_text m-0">
                                    Copyright ©<script>
                                    document.write(new Date().getFullYear());
                                    </script>2021 All rights reserved |  <NavLink
                                        to="https://ambiguousit.com" target="_blank"> Ambiguous Solutions Pvt. Ltd.
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</>
     
    );
};
};

export default Footer;