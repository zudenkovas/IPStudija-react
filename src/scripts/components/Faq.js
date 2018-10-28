import React, { Component } from "react";
import Modal from "components/Modal.js"


class Faq extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            
        }

        this.renderModal = this.renderModal.bind(this);

    }

    renderModal(id){
        console.log("modal render", id)

        this.setState({isOpen: !this.state.isOpen})
        console.log(this.state.isOpen);
    }


    render() {
        
        return (
            <div className="faq-components">
                <Modal show={this.state.isOpen}
  onClose={this.renderModal}>

                </Modal>
       

                <div className="faq-component" onClick={this.renderModal.bind(this, 1)}>
                    <div className="dot">
                    </div>

                    <div className="faq-question">
                    KOKIA YRA VIENO METRO VIRTUVĖS KAINA?
                    </div>

                </div>

                






                {/* <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div> */}

              
            </div>
        );
    }
}

export default Faq;
