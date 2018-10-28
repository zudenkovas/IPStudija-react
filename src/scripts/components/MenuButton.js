
class MenuButton extends React.Component {

    constructor() {
        super();
        this.state = {
            visibility: "invisible",

        }

        this.setVisibility = this.setVisibility.bind(this);
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
            <div className="button-container"> 
                <button className="menu-button" onClick={this.setVisibility}>{this.props.menuText}</button>
            </div>

        );
    }
}

export default MenuButton;
