import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <div className="header container-fluid">
            <div className="row justify-content-center">
            
            <div className="col-12">
            
            <a className="logo" href="/" >
            <img src="src/img/iplogo.png"
     alt="IP-Studija"/>
            </a>

            
            </div>
            
            </div>
            
            

            </div>
        );
    }
}

export default Header;