import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {

    constructor(){
        super();

    this.getAllData = this.getAllData.bind(this);
    }
    
    componentWillMount(){
        this.getAllData();
    }


    getAllData(){
        let allData = DataStore.getAll();
    console.log(allData);
    }
     

    render() {
        


        return (
            <div>
                <h2>Homepage template</h2>
            </div>
        );
    }
}

export default Home;
