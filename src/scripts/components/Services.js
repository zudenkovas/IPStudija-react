import DataStore from 'flux/stores/DataStore.js';
import Menu from 'components/Menu.js';

class Services extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('kontaktai');
        console.log(pageData);
        return (
            <div>
                <h2>Services page template</h2>
                {/* <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div> */}

               
            </div>
        );
    }
}

export default Services;
