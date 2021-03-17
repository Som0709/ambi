import React, {Component} from "react";

class  BoardText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:{},
            isLoaded:false,
        }
    }  

    componentDidMount() {
        fetch('http://studymaterial.ambilms.com/api/boardDetails.php',
        {
            method : 'POST',
            headers :{ 
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body : new URLSearchParams({
                boardID : 2
            }) 
        })
        
        .then(response => response.json())
        .then(json => {
            this.setState({
                posts: json,
                isloading:1,
            })
            console.log(json);
        })
    }

    render() {
        const {isloading, posts} = this.state
        if (!isloading){
            return<div> Loading... </div>;
        }
        else {
            return (
    <> 
        <div className="board_clsaa_content">
            <div className="sub_tittle_ambi">
                {posts.result.mediumList.map(post => (
                    <h3>{post.mediumID}</h3>
                ))};
            </div>
            <div className="sub_para">
                <p>CBSE Board exam is one of the difficult exam, a student can face. A proper plan and preparedness will help student pass in flying colours. The first step is to understand the syllabus and weightage attached to each topic. The books that is recommended for CBSE board are NCERT textbooks, that is vouched by every student. Apart from NCERT, there are other books that can be referred to have a good prep.
                </p>
            </div>
            <div className="su_chapter_tab">
                <div className="book_tittle">
                    Important Highlights of CBSE Board
                </div>
                <div className="book_table mb-5">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="board_logo">
                                            <img src="https://ambilms.com/wp-content/uploads/2020/08/CBSE-to-scrap-re-evaluation-of-answer-sheet-rule.png" alt=""/>
                                        </div>
                                    </th>
                                    <th>Central Board of Secondary Education</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Abbreviation</strong></td>
                                    <td><p>CBSE</p></td>
                                </tr>
                                <tr>
                                    <td><strong>Official Website</strong></td>
                                    <td>
                                        <a href="https://www.cbse.gov.in/" rel="nofollow" target="_blank"><p>www.cbse.nic.in</p>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Headquarters</strong></td>
                                    <td><p>New Delhi, India</p></td>
                                </tr>
                                <tr>
                                    <td><strong>Official languages</strong></td>
                                    <td><p>Hindi, English</p></td>
                                </tr>
                                <tr>
                                    <td><strong>Type</strong></td>
                                    <td><p> Governmental Board of Education</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
    };
    }
}
export default BoardText;