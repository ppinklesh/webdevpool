import React, { Component } from 'react'
import {Modal,Col,Row,Button,Form} from 'react-bootstrap';

class Modal1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.name)
        console.log("it's working");
        return (
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Registration Successfully !
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Hello {this.props.name}.</h4>
                        <p>
                        Congratulations,<br /> 
                        you have Successfully created a WebDevPool account.<br /><br />
                        Thank you !                        
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{backgroundColor:'red',color:'white'}} variant="red" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
        )
    }
}

export default Modal1;