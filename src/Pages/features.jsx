import React from "react";
import banner_images from "../Images/banner.jpg";

const Features = () => {
    return ( 
        <>
            <section className="ambiLMS-banner">
                <img src={banner_images} className="ambiLMS_banner_bg" alt={banner_images}/>
                <div className="ambi_banner_content">
                    <div className="container">
                        <div className="row justify-content-center m-auto">
                            <div className="col col-xs-12 col-sm-12 col-md-8 ambi_banner_content">
                                <div className="ambi_heading">
                                    <h1 className="heading white">Better Learning. Better Results.</h1>
                                    <h1 className="heading orange">One platform for all your learning needs</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <h1> Features </h1>
        </>
    );
};
export default Features;