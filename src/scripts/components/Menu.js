import { Link } from 'react-router-dom';

class Menu extends React.Component {

    constructor() {
        super();
        this.state = {

        }

    

    }



    setVisibility() {

        if (document.getElementById("navigation-meniu").className === "visible") {

            document.getElementById('navigation-meniu').classList.remove("visible");
            document.getElementById('navigation-meniu').classList.add("invisible");               

        } else if (document.getElementById("navigation-meniu").className === "invisible") {
            document.getElementById('navigation-meniu').classList.remove("invisible");
            document.getElementById('navigation-meniu').classList.add("visible");
        }
    }



    render() {
        return (
            <div id="navigation-meniu" className="invisible">

                <nav className="site-nav menu">
                    <div className="section-inner menus group">
                        <ul id="menu-meniu-1" className="menu">
                            <li className="menu-item" onClick={this.props.menuTextSwitch}><Link onClick={this.setVisibility} to="/apie-mus">APIE MUS</Link></li>
                            <li className="menu-item" onClick={this.props.menuTextSwitch}><Link onClick={this.setVisibility} to="/paslaugos">PASLAUGOS</Link></li>
                            <li className="menu-item" onClick={this.props.menuTextSwitch}><Link onClick={this.setVisibility} to="/projektai">PROJEKTAI</Link></li>
                            <li className="menu-item" onClick={this.props.menuTextSwitch}><Link onClick={this.setVisibility} to="/isigyti">ĮSIGYTI</Link></li>
                            <li className="menu-item" onClick={this.props.menuTextSwitch}><Link onClick={this.setVisibility} to="/duk">D.U.K.</Link></li>
                            <li className="menu-item" onClick={this.props.menuTextSwitch}><Link onClick={this.setVisibility} to="/kontaktai">KONTAKTAI</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        );
    }
}

export default Menu;
