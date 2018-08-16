import DataStore from 'flux/stores/DataStore.js'

class Faq extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('kontaktai');
        console.log(pageData);
        return (
            <div>
                <h2>FAQ page template</h2>
                {/* <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div> */}
            </div>
        );
    }
}

export default Faq;