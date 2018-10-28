import DataStore from 'flux/stores/DataStore.js';
import Menu from 'components/Menu.js';

class About extends React.Component {
constructor(){
    super();

    this.getData = this.getData.bind(this);
}

componentWillMount(){
    this.getData;
}

getData(){
    let pageData = DataStore.getPageBySlug('portfolio');
        console.log(pageData, "aboutusjs");
}



    render() {
        let pageData = DataStore.getPageBySlug('portfolio');
        console.log(pageData, "aboutusjs");
        return (
            <div>
                <h2>About page template</h2>
                {/* <h1>{pageData.title.rendered}</h1> */}

                {/* <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div> */}

             

            </div>
        );
    }
}

export default About;
