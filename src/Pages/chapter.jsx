import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import SideBard from "./sideBar";


class Chapter extends Component {
    // Chapter List & Detail 
    constructor(props) {
        super(props);
        this.state = {
            posts:{},
            isLoaded:false,
            chapterList:[]
        }
    }
    componenDidMount() {
        fetch('http://studymaterial.ambilms.com/api/singleSubjectDetails.php',
        {
            method:'POST',
            header: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: new URLSearchParams ({
                subjectID: 113
            })
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                posts:json,
                isLoading:true, 
            })
            console.log(json);
        })
    }
    render () {
        const {isLoading, posts} = this.state 
        if (!isLoading) {
            return <div>Loading...</div>;
        }
        else {  
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
                                    {posts.result.chapterList.map(post => (
                                    <div className="board_class_detail">
                                        <div className="board_clsaa_content">
                                            <div className="ambi_cta_bann">
                                                <img src="https://thumbs.dreamstime.com/t/technology-banner-1263589.jpg"/>
                                            </div>
                                            <div className="sub_tittle_ambi">
                                                <h3>{post.chapter_name}</h3>
                                            </div>
                                            <div className="sub_para">
                                                <p>The detailed step by step explanations provided for each problem help students to solve even the toughest problem in a shorter duration.</p>
                                                <strong>
                                                    <em>The complete ML Aggarwal Class 9 Solutions will be available soon…</em>
                                                </strong>
                                            </div>
                                            <div className="su_chapter_tab">
                                                <div className="book_tittle">
                                                    Subject Chapter List
                                                </div>
                                                <div className="book_table">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th> SUBJECT Chapter List
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><a href="chapter-detail.php">qwe</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))};
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
}
};
export default withRouter(Chapter);