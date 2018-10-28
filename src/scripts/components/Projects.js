import DataStore from 'flux/stores/DataStore.js';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

class Projects extends React.Component {
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
        var allProjectsPosts = [];
        for (var i = 0; i < allPostData.length; i++) {
            if (allPostData[i]._embedded['wp:featuredmedia'] && allPostData[i].categories.includes(13) ) {
                allProjectsPosts.push(allPostData[i])
            }
        }

        console.log(allProjectsPosts, 'projects')
        this.setState({ allData: allData });
        this.setState({ allPostData: allProjectsPosts });
    }
//  col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12
                
    renderPosts() {
        let allPostData = this.state.allPostData;
        var posts = []
       

            for (let i = 0; i < allPostData.length; i++) {
                posts[i] = <div key={i} className="project col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <img className="project-image" key={i} src={allPostData[i]._embedded['wp:featuredmedia'][0].source_url} height="150px" />
                    
                    <Link to={"/projektas-"+allPostData[i].id} id={allPostData[i].id} id={allPostData[i].id} className="project-overlay"  onClick={this.getPostId}>
                    <div className="project-text">
                    <div className="title-div"><h5>{allPostData[i].title.rendered}</h5></div>
                <div className="sub-title-div"><h6>{allPostData[i]._embedded['wp:term'][1][0].name}</h6></div>
                    </div>
                    </Link>
                </div>
                
                
                
                
            //     <div key={i} className="project col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            //     <div>{allPostData[i].title.rendered}</div>
            //     <div>{allPostData[i]._embedded['wp:term'][1][0].name}</div>
            //     <Link to={"/projektas-"+allPostData[i].id} id={allPostData[i].id} onClick={this.getPostId}><img key={i} src={allPostData[i]._embedded['wp:featuredmedia'][0].source_url} height="200px" /></Link>                </div>
            // 
        }
        
            console.log(posts, 'posts')
        return posts;
    }

    getPostId(event){
        let target = event.currentTarget.id;
        console.log(target, "target");
        this.props.getPostId(target);
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 2,
            slidesPerRow: 3,
            
        }


        return (
            <div className="render-frame">
                {/* <h2>Homepage template</h2> */}
                
                <div className="projects container d-none d-sm-block">
                <Slider {...settings} className="row">
                {/* <div className=""> */}
                {this.renderPosts()}
                {/* </div> */}
                </Slider>
                </div>

                <div className="projects container d-block d-sm-none">
                
               
                {this.renderPosts()}
               
                </div>
            </div>
        );
    }
}

export default Projects;
