import { render } from 'react-dom';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataActions from 'flux/actions/DataActions.js';

import Home from 'components/Home.js';
import About from 'components/About.js';
import Contact from 'components/Contact.js';
import Header from 'components/Header.js';
import Faq from 'components/Faq.js';
import Products from 'components/Products.js';
import Projects from 'components/Projects.js';
import Project from 'components/Project.js';
import Services from 'components/Services.js';
import MenuButton from 'components/MenuButton.js';
import Menu from 'components/Menu.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer extends Component {

    constructor() {
        super();
        this.state = {
            postId: undefined,
            menuText: "MENIU"

        };

        this.getPostId = this.getPostId.bind(this);
        this.menuTextSwitch = this.menuTextSwitch.bind(this);
    }

    templates = {
        'portfolio': About,
        'contact': Contact,
        'faq': Faq,
        'products': Products,
        'projects': Projects,
        'services': Services,
        'project': Project

    }

    getPostId(received){
        this.state.postId = received;
        // this.setState({postId: received})
    }

    menuTextSwitch(event){
        console.log(event.target.innerText, 'event target')

        this.setState({menuText: event.target.innerText})
    }

    buildProjectRoutes(data) {
        return data.posts.map((post, i) => {
            return (
                <Route
                    key={i}
                    render={(props) => (<Project {...props} postId={this.state.postId} />)}
                    path={`/projektas-${post.id}`}
                    exact
                />
            )
        })
    }

    run() {
        DataActions.getPages((response) => {
            render(


                <Router>

                    <div>
                        <Header />
                        <div className="wrapper container">
                            <Switch >

                                <Route exact path="//" render={(props) => (<Home {...props} getPostId={this.getPostId}/>)} />
                                <Route path="/apie-mus" render={(props) => (<About {...props} someProp={100} />)} exact />
                                <Route path="/paslaugos" render={(props) => (<Services {...props} someProp={100} />)} exact />
                                <Route path="/projektai" render={(props) => (<Projects {...props} getPostId={this.getPostId} />)} exact />
                                <Route path="/isigyti" render={(props) => (<Products {...props} someProp={100} />)} exact />
                                <Route path="/duk" render={(props) => (<Faq {...props} someProp={100} />)} exact />
                                <Route path="/kontaktai" render={(props) => (<Contact {...props} someProp={100} />)} exact />
                                <Route path="/projektas" render={(props) => (<Project {...props} postId={this.state.postId} />)} />
                                {this.buildProjectRoutes(response)}
                                <Route render={() => { return <Redirect to="/" /> }} />
                            </Switch>
                        <Menu menuTextSwitch={this.menuTextSwitch}/>
                        </div>
                        <MenuButton menuText={this.state.menuText}/>

                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}



new AppInitializer().run();
