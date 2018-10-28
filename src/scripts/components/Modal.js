import React, { Component } from "react";
import PropTypes from 'prop-types';

class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            
            
        }

    }



    render() {

    if(!this.props.show){
        return null;
    }
        
        return (

            <div className="ip-modal">
                Modal

                <button onClick={this.props.onClose}>
              Close
            </button>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };

export default Modal;
