import DataStore from 'flux/stores/DataStore.js';
import Slider from "react-slick";


class Project extends React.Component {
    constructor() {
        super();
        this.state = {
            pageData: undefined,

        }

        this.getPostData = this.getPostData.bind(this);
        this.addClassToParagrah = this.addClassToParagrah.bind(this);
        this.renderPost = this.renderPost.bind(this);
    }

    componentWillMount(){
        this.getPostData();
    }

    componentDidMount(){
        
    }

    getPostData(){
        let id = this.props.postId;
        let pageData = DataStore.getPostById(id);
        pageData.content.rendered = pageData.content.rendered.replace('<p>', '');
        pageData.content.rendered = pageData.content.rendered.replace('</p>', '');
        this.setState({pageData: pageData});
    }

    addClassToParagrah(){
        document.getElementsByTagName('p')[0].classList.add('image-paragraph');
    }

    renderPost(){
        let rawHtml = this.state.pageData.content.rendered;

        let frag = document.createRange().createContextualFragment(rawHtml);
        console.log(frag[0], 'frags');
        let post = [];
        let allDivs = frag.querySelectorAll('div');
        let firstChild = frag.children;
        console.log(frag.childNodes, 'childnodes')
        console.log(frag.querySelectorAll('div'), 'alldivs')
        let arrayLentgh = frag.childNodes.length/2

        for (let i=0; i<arrayLentgh; i++){
            post[i] = <div key={i}><img style={{height: 300 + 'px'}} src={allDivs[i].firstChild.currentSrc}/></div>;
           

        }
    
        console.log(frag.removeChild(frag.firstChild), 'removed child')
        console.log(post, 'project')
        
        return post;
    }



    render() {
        let id = this.props.postId;
        let pageData = DataStore.getPostById(id);
        console.log(pageData, 'project page data');

        var settings = {
            className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    
    }




        return (
            <div className="none">
                <h1>{this.state.pageData.title.rendered}</h1>
                <h2>{this.state.pageData._embedded['wp:term'][1].name}</h2>
                
             
                <div className="projects">
                <Slider {...settings} >
                
                {this.renderPost()}
                
                
                {/* <div dangerouslySetInnerHTML=
                {{__html: this.state.pageData.content.rendered}}>
                </div> */}
                
                </Slider>
                </div>
            </div>
        );
    }
}

export default Project;
