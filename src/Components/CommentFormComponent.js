import React ,{Component} from 'react';
import { Col, Row, Label, ModalBody, Modal, ModalHeader, Button} from 'reactstrap';


const required=(val)=>val && val.length;
const maxLength =(len)=>(val)=>!val || (val.length<=len);
const minLength =(len)=>(val)=>val && (val.length>=len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.handelSubmit=this.handelSubmit.bind(this);
    }
    
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render(){
        return(
            <Modal isOpen={this.props.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)>
                        <Row className='form-group'>
                            <Label htmlFor='rating' md={12}>Rating</Label>
                            <Col md={12}>
                                <Control.select model='.rating' id='rating' name='rating' className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='name' md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model='.name' id='name' name='name' className='form-control' placeholder='Your Name'
                                validators={{
                                    required,minLength: minLength(3),maxLength: maxLength(15)
                                }}/>
                                <Errors className='text-danger' model='.firstname' show='touched'
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='comment' md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model='.comment' id='comment' name='comment' className='form-control' row='6'/>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col md={12}>
                                <Button type='submit' color='primary'>Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        );
    }
}
export default CommentForm;
