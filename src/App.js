import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect, Link, useParams, useRouteMatch } from "react-router-dom";

import Header from "./Nav/header";
import Footer from "./Nav/footer";
import Banner from "./Pages/banner";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Book from "./Pages/book";
import BoardText from "./Pages/boardText";
import QNA from "./Pages/qna";
import Subject from "./Pages/subject";
import BoardDetails from "./Pages/boardDetail";
import Board from "./Pages/board";
import Features from "./Pages/features";
import Chapter from "./Pages/chapter";
import ChapterDetail from "./Pages/chapterDetail";
import ChapterNotes from "./Pages/chapterNotes";
import ContactDetails from "./Pages/contactDetails";
const App = () => {
    return ( 
        <Router >
            <Header/> 
            <Switch>
            <Route exact path = "/" >
                <Banner/>
                <Board/>
                <Route path = "/boardDetail/:id" component = { Board }/> 
            </Route>

            <Route exact path = "/contact" component = { Contact } >
            <Banner/>
            <Route path = "/" component = { ContactDetails } > </Route> 
            </Route> 
            <Route exact path = "/book" component = { Book }/>  
            <Route exact path = "/qna" component = { QNA }/> 

            <Redirect to = "/" />
            </Switch>   
            <Footer/>
        </Router>    
    );
};


export default App;