import React from "react";
import banner_images from "../Images/banner.jpg";
import SideBard from "./sideBar";
import ChapterNotes from "./chapterNotes";

const ChapterDetail = () => {
  
    return (
        <>
        <section className="sng_board_class sng_gap">
     <div className="container">
         <div className="row">
             <div className="col-md-4">
                 <div className="ambi_right_sidebar">
                     <SideBard/>
                 </div>
             </div>
             <div className="col-md-8">
                 <div className="class_ambi_card">
                     <div className="row">
                         <div className="col-md-12 mb-4">
                             <div className="board_class_detail">
                                 <div className="board_clsaa_content">
                                     <div className="ambi_cta_bann">
                                         <img src="https://thumbs.dreamstime.com/t/technology-banner-1263589.jpg"/>
                                     </div>
                                     <div className="sub_tittle_ambi">
                                         <h3>ML Aggarwal Solutions for Class 9 Maths Chapter 1 - Rational and
                                             Irrational Numbers</h3>
                                     </div>
                                     <div className="sub_para">
                                         <p>asdfsad
                                         </p>
                                         <p><strong>Chapter 1 :- </strong>sdf</p>
                                         <p>g
                                         </p>
                                     </div>
                                     <ChapterNotes/>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>
        </>
    );
};
export default ChapterDetail;