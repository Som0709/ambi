import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

class BoardList  extends Component {
    // Get Api
   
    constructor(props) {
        super(props);
        this.state = {
            posts:{},
            isLoaded:false,
        }
    }  

    componentDidMount() {
        fetch('http://studymaterial.ambilms.com/api/boardDetails.php')
        .then(response => response.json())
        .then(json => {
            this.setState({
                posts: json,
                isLoaded:true,
            })
        });
    }
       
    render () {
        const {isLoaded, posts } = this.state
        if (!isLoaded) {
            return <div> Loading... </div>;
        }
        else {
            return  (
             <>
                {posts.result.boardList.map(post => (
                <div className="col-sm-6 col-xl-4">
                    <div className="ambi_board">
                       <Link to={`boardDetail/${post.id}`}>
                        <div className="ambi_board_feature" key={post.id}>
                            <div className="ambi_board_part">
                                <span className ="ambi_board_icon">
                                    <img className="lazyloaded" src={post.boardImageLink} alt={post.boardImageLink} /> 
                                </span> 
                                <h4> {post.board_name}</h4> 
                                <p> {post.boardPreContent}</p> 
                            </div> 
                        </div> 
                    </Link>
                </div> 
            </div> 
             ))};
          </>
        );
    }
}
}
export default withRouter(BoardList);




