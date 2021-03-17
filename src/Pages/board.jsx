import React from "react";
import BoardList from "../Pages/board-list";
import Banner from "../Pages/banner";


export default class Board  extends React.Component {
    render () {
        return  (
            <section className = "ambiLMS_studymaterial ambi_space">
                <div className = "container">
                    <div className = "row justify-content-center mt-5">
                        <div className = "col-xl-5">
                            <div className = "ambiLMS_tittle  text-center">
                                <p> Our Literature Course </p> 
                                <h2> Schooling Board</h2> 
                            </div> 
                        </div> 
                    </div> 
                    <div className="row gy-4"> 
                        <BoardList/>
                    </div> 
                </div> 
            </section> 
        );
    }
}




