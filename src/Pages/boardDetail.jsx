import React, {Component} from "react";
import { Link } from "react-router-dom";
// import MediumDetails from "./Pages/mediumDetails";

class  BoardDetails extends Component {
    // Get Api
    constructor(props) {
        super(props);
        this.state = {
            posts:{},
            isLoaded:false,
            mediumList:[],
            classList:[]

        }
    }  

    componentDidMount() {
        fetch('http://studymaterial.ambilms.com/api/getBoardDetailsByID.php',
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
        <section className="sng_board_class mt-5 ambi_space ">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="class_ambi_card">
                            <div className="board_class_detail">
                                <div className="board_clsaa_content">
                                    <div className="sub_tittle_ambi">
                                        <h3>{posts.result.boardPreContent}</h3>
                                        
                                    </div>
                                    <div className="sub_para">
                                        <p>{posts.result.boardMainContent}</p>
                                    </div>
                                    <div className="su_chapter_tab">
                                        <div className="book_tittle">
                                            Important Highlights of {posts.result.boardPreContent}
                                        </div>
                                        <div className="book_table mb-5">
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="board_logo">
                                                                    <img src={posts.result.boardImageLink} alt={posts.result.boardImageLink}/>
                                                                </div>
                                                            </th>
                                                            <th>{posts.result.boardMainContent}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Abbreviation</strong></td>
                                                            <td>
                                                                <p>{posts.result.abbreviation}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Official Website</strong></td>
                                                            <td>
                                                                <Link target="_blank" to={posts.result.officialWebsite} rel="nofollow" target="_blank">
                                                                    {posts.result.officialWebsite}<p></p>
                                                            </Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Headquarters</strong></td>
                                                            <td>
                                                                <p>{posts.result.headquaters}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Official languages</strong></td>
                                                            <td>
                                                                <p>{posts.result.officialLanguage}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Type</strong></td>
                                                            <td>
                                                                <p>{posts.result.type}</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {posts.result.mediumData.mediumList.map(post => (
                                <div className="ambiLMS-type-conten"  key={post}>
                              
                                    <div className="book_tittle">
                                        Important Highlights of 
                                    </div>
                                   
                                    <div className="content">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" id="headingOne" role="tab">
                                                    <h4 className="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#hindiMedium" aria-expanded="false" aria-controls="collapseOne" className="collapsed">

                                                        {post.mediumName}

                                                        <i className="pull-right fa fa-plus"></i></a></h4>
                                                </div>
                                                <div className="panel-collapse collapse" id="hindiMedium" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false">
                                                    <div className="panel-body">
                                                        <div className="row gy-4">
                                                        {post.classList.map(post1 => (
                                                            <div className="col-md-4 ">
                                                                    <div class="sample_paper"><a href="sample-paper.php"><div class="subBox"><div class="subdet"><h3>CBSE Board <br/>Class {post1.class_name}</h3></div><div class="subicon"><span class="icon"><i class="fa fa-book" aria-hidden="true"></i></span>
                                                                    </div>
                                                                    </div>
                                                                    </a>
                                                                    </div>
                                                          
                                                            </div>
                                                              ))};
                                                        </div>
                                                    </div>
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
 
</section>

  </>
    );
};
    }
}
export default BoardDetails;