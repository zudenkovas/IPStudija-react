import DataStore from 'flux/stores/DataStore.js';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            allData: undefined,
            allPostData: undefined,
        }

        this.getAllData = this.getAllData.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
        this.getPostId = this.getPostId.bind(this);
    }

    componentWillMount() {
        this.getAllData();

    }

    componentDidMount() {
        this.renderPosts();

    }


    getAllData() {
        let allData = DataStore.getAll();
        var allPostData = allData.posts;
        var allFrontPagePosts = [];
        for (var i = 0; i < allPostData.length; i++) {
            if (allPostData[i]._embedded['wp:featuredmedia'] && allPostData[i].categories.includes(14)) {
                allFrontPagePosts.push(allPostData[i])
            }
        }

        this.setState({ allData: allData });
        this.setState({ allPostData: allFrontPagePosts });
    }

    renderPosts() {
        let allPostData = this.state.allPostData;
        var posts = []
        console.log(allPostData)


        if (this.state.allPostData.lentgh > 6) {
            for (let i = 0; i < 6; i++) {
                posts[i] = <div key={i} className="project col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <img className="project-image" key={i} src={allPostData[i]._embedded['wp:featuredmedia'][0].source_url} height="150px" />
                    
                    <Link to="/projektas" id={allPostData[i].id} className="project-overlay"  onClick={this.getPostId}>
                    <div className="project-text">
                    <div className="title-div"><h5>{allPostData[i].title.rendered}</h5></div>
                <div className="sub-title-div"><h6>{allPostData[i]._embedded['wp:term'][1][0].name}</h6></div>
                    </div>
                    </Link>
                </div>
            }
        } else if (this.state.allPostData.length <= 6) {
            for (let i = 0; i < allPostData.length; i++) {
                posts[i] = <div key={i} className="project col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12
                ">
                <img className="project-image" key={i} src={allPostData[i]._embedded['wp:featuredmedia'][0].source_url} height="150px" />
                
                <Link className="project-overlay" to={"/projektas-"+allPostData[i].id} id={allPostData[i].id} onClick={this.getPostId}>
                <div className="project-text">
                <div className="title-div"><h5>{allPostData[i].title.rendered}</h5></div>
                <div className="sub-title-div"><h6>{allPostData[i]._embedded['wp:term'][1][0].name}</h6></div>
                </div>
                </Link> </div>
            }
        }


        return posts;
    }

    getPostId(event){
        let target = event.currentTarget.id;
        console.log(target, "target");
        this.props.getPostId(target);
    }


    render() {


        return (
            <div className="render-frame">
                {/* <h2>Homepage template</h2> */}
                
                <div className="projects container">
                <div className="row">
                {this.renderPosts()}
                </div>
                
                </div>



            
            </div>
        );
    }
}

export default Home;
