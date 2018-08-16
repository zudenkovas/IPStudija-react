import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <div className="header container">
            <div className="row justify-content-center">
            
            <div className="col-12">
            
            <a className="logo" href="/" >
            <img src="src/img/iplogo.png"
     alt="IP-Studija"/>
            </a>

            
            </div>
            
            </div>
            
                <Link to="/apie-mus" style={{marginRight: '10px'}} >APIE MUS</Link>
                <Link to="/paslaugos" style={{marginRight: '10px'}} >PASLAUGOS</Link>
                <Link to="/projektai" style={{marginRight: '10px'}} >PROJEKTAI</Link>
                <Link to="/isigyti" style={{marginRight: '10px'}} >ĮSIGYTI</Link>
                <Link to="/duk" style={{marginRight: '10px'}} >D.U.K.</Link>
                <Link to="/kontaktai" style={{marginRight: '10px'}} >KONTAKTAI</Link>

                {/* {allPages.map((page) => {
                    if(page.slug != 'home'){
                       return(
                            <Link 
                                key={page.id} 
                                to={`/${page.slug}`} 
                                style={{marginRight: '10px'}}
                            >
                                {page.title.rendered}
                            </Link>
                        )                     
                   }
                })} */}
            </div>
        );
    }
}

export default Header;