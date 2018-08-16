import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

import Home               from 'components/Home.js';
import About                from 'components/About.js';
import Contact              from 'components/Contact.js';
import Header               from 'components/Header.js';
import Faq                  from 'components/Faq.js';
import Products             from 'components/Products.js';
import Projects             from 'components/Projects.js';
import Services             from 'components/Services.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {
    constructor(){

        this.state = {
    
        }

    }
    

    templates = {
        'portfolio': About,
        'contact': Contact,
        'faq': Faq,
        'products': Products,
        'projects': Projects,
        'services': Services

    }

    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })     
    }



    run() {
        DataActions.getPages((response)=>{
            render(
              
                
                <Router>
                    <div>
                    <Header />

                        <Switch>
                            <Route path="/" component={ Home } exact />
                            <Route path="/apie-mus" component={ About } exact />
                            <Route path="/paslaugos" component={ Services } exact />
                            <Route path="/projektai" component={ Projects } exact />
                            <Route path="/isigyti" component={ Products } exact />
                            <Route path="/duk" component={ Faq } exact />
                            <Route path="/kontaktai" component={ Contact } exact />

                            {/* {this.buildRoutes(response)} */}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch> 
                    </div>
                </Router>


            
                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
